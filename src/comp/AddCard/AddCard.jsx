import "./Add.css"
import { useState } from "react"
const AddCard=(props)=>{
    const [show,setShow]=useState(true)
    console.log(props.data,"..........")
    const onAdd = () => {
        let d = JSON.parse(localStorage.getItem("data"));
        if (d) {
            let data = [props.data, ...d];
            localStorage.setItem("data", JSON.stringify(data));
            console.log("true");
        } else {
            let data = [props.data];
            localStorage.setItem("data", JSON.stringify(data));
            console.log("false");
        }
        setShow(false);  
    };
    
        
        

return(<div className="AddCard">
    {show&&<button onClick={onAdd} >
Add to Bookshelf
    </button>}
    
</div>)    
}

export default AddCard