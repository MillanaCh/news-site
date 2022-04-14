import { createContext, useState, useEffect } from "react";
import * as firestoreApp from "../firebase/configFirebase"
import { collection, addDoc , getDocs, doc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
export const FirestoreContext = createContext()
const FirestoreProvider = ({children}) => {
    const [allNews, setAllNews] = useState([])
    //add reference to collection and give collection name
    const refCollection = collection(firestoreApp.firestore, "news")

    // function for adding new data to database - STORAGE PART + FIRESTORE = new PRODUCT
    const addNewses = async(newProduct, image) => {
        const refHosting = ref(firestoreApp.storage, `image/${image.name}`)
        const uploadImage = uploadBytesResumable(refHosting, image)
        uploadImage.on(
            "state_change",(snapshot) => {
                const uploadProgress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + uploadProgress + '% done');
            }, (err) => {console.log(err.message)},
               () => getDownloadURL(uploadImage.snapshot.ref).then((downloadUrl) => addDoc(refCollection, {...newProduct, img: downloadUrl}))
        )
    }

    //this function get data from firestore and save it in my state 
    const getAllNews = async () => {
        const productsFromFirestore = await getDocs(refCollection)
        setAllNews(productsFromFirestore.docs.map(el => ({
            data: el.data(),
            id: el.id
        })))
    }
    useEffect(() => {
        getAllNews()
    }, [])

    //TODOS MODIFY Prodcuts
    //DELETE Products

    const data={
        allNews: allNews
    }
    return(
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider