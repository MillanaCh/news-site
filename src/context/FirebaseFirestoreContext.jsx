import { createContext } from "react";
import * as firestoreApp from "../firebase/configFirebase"
import { collection, addDoc } from "firebase/firestore";
export const FirestoreContext = createContext()
const FirestoreProvider = ({children}) => {
    //add reference to collection and give collection name
    const refCollection = collection(firestoreApp.firestore, "news")

    // for adding new data to database
    const addProducts = async(newProduct) => {
        try{
            await addDoc(refCollection, newProduct)
        }catch(err){
            alert(err?.message)
        }
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