import { createContext } from "react";
import * as firestoreApp from "../firebase/configFirebase"
import { collection, addDoc } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
export const FirestoreContext = createContext()
const FirestoreProvider = ({children}) => {
    //add reference to collection and give collection name
    const refCollection = collection(firestoreApp.firestore, "news")

    // for adding new data to database - STORAGE PART
    const addProducts = async(newProduct, image) => {
        //first part to donwload image because ut take more time
        const refHosting = ref(firestoreApp.storage, `image/${image.name}`)
        const uploadImage = uploadBytesResumable(refHosting, image)
        //These changes in state, combined with the properties of the TaskSnapshot provide a simple yet powerful way to monitor upload events.
        uploadImage.on(
            //state changed is observer - наблюдатель
            "state_change",(snapshot) => {
                const uploadProgress =  (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
                console.log('Upload is ' + uploadProgress + '% done');
            }, (err) => {console.log(err.message)},
               () => getDownloadURL(uploadImage.snapshot.ref).then((downloadUrl) => addDoc(refCollection, {...newProduct, img: downloadUrl}))
        )
    }
    const data={
        addProducts: addProducts
    }
    return(
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider