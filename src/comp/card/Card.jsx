import "./card.css"
import AddCard from "../AddCard/AddCard"
const Card=({data,add})=>{


    return(<div className="Card">
        <div>
        <h3 className="title">Book Title:</h3><span >{data.name}</span>
        </div>
<div>
        <h3 className="bookname">Edition Count: </h3><span>{data.count}</span>
</div>



{add&&<AddCard data={data}/>}


</div>)
}
export default Card