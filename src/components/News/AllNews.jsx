import {useContext} from "react"
import {FirestoreContext} from "../../context/FirebaseFirestoreContext"
import News from "./News"
function AllNews(){
    const {allNews} = useContext(FirestoreContext)
    return(
        <>
        {allNews.map(el => (
          <News key={el.id} data={el.data}/>
        ))}
        </>
    )
}
export default AllNews