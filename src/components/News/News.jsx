function News({id, data}) {
    return(
        <div>
            <h2>{data.name}</h2>
            <img src={data.img} width="150px"/>
            <h3>{data.price}</h3>
        </div>
    )
}
export default News