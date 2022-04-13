//i want to all auth will be one place and have access from different places
import { createContext , useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import * as firebaseApp from "../firebase/configFirebase"

export const GeneralAuthContext = createContext()

export const GeneralAuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    //for keep our user
    onAuthStateChanged(firebaseApp.auth, (createdUser) => {
        setUser(createdUser)
    })
    //firstPart create user 
    const createUserWithFirebase = async(email, password) => {
        try{
            const newUser = await createUserWithEmailAndPassword(firebaseApp.auth, email, password)
            setUser(newUser)
        }catch(err){
            alert(err.message)
        }
    }
    //for log out 
    const logOut = async() => {
        try{
            await signOut(firebaseApp.auth)
        }catch(err){
            alert(err?.message)
        }
    }
    //for log in
    const logInWithEmailAndPassword = async(email, password) => {
        try{
            const logIn = await signInWithEmailAndPassword(firebaseApp.auth, email, password)
        } catch(err){
            alert(err?.message)
        }
    }
    const data = {
        createUserWithFirebase: createUserWithFirebase,
        user:user,
        logOut: logOut,
        logInWithEmailAndPassword:logInWithEmailAndPassword
    }
    //console.log(user) //a lot of tokens and informations
    return(
        <GeneralAuthContext.Provider value={data}>
            {children}
        </GeneralAuthContext.Provider>
    )
}
export default GeneralAuthProvider
