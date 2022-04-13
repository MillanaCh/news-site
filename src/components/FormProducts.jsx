import {useState, useContext} from "react"
import {FirestoreContext} from "../context/FirebaseFirestoreContext"
function FormProducts(){
    const {addProducts} = useContext(FirestoreContext)
    const [newProducts, setNewProduct] = useState({image:"", name:"", price:""})
    return(
        <>
        <input onChange={(e) => setNewProduct({...newProducts, name:e.target.value})} placeholder="please enter product name"/>
        <input onChange={(e) => setNewProduct({...newProducts, price: e.target.value})} placeholder="please enter product price"/>
        <input onChange={(e) => setNewProduct({...newProducts, image: e.target.value})} placeholder="please enter product price"/>
        <button onClick={() => addProducts(newProducts)}>Add Product</button>
        </>
    )
}
export default FormProducts
