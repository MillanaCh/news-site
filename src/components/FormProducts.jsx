import {useState, useContext} from "react"
import {FirestoreContext} from "../context/FirebaseFirestoreContext"
function FormProducts(){
    const {addProducts} = useContext(FirestoreContext)
    const [newProducts, setNewProduct] = useState({name:"", price:""})
    const [newImage, setNewImage] = useState("")
    return(
        <>
        <input onChange={(e) => setNewProduct({...newProducts, name:e.target.value})} placeholder="please enter product name"/>
        <input onChange={(e) => setNewProduct({...newProducts, price: e.target.value})} placeholder="please enter product price"/>
        <input type="file" onChange={(e) => setNewImage(e.target.files[0])} placeholder="please enter product price"/>
        <button onClick={() => addProducts(newProducts, newImage)}>Add Product</button>
        </>
    )
}
export default FormProducts
