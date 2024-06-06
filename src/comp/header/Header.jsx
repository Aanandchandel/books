import "./Header.css"
import {  useContext } from "react";
import { Link } from "react-router-dom";
import { booksContext } from "../../context";
const Header=()=>{
    const {setBooks}=useContext(booksContext);
    
    async function getData(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            return null;
        }
    }
    const onInput=async(e)=>{
         if(e.key==="Enter"){
            setBooks([])
            getData(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`)
                .then(data => {
                    if (data && data.docs) {
                        setBooks(data.docs);
                    }
                })
                .catch(error => console.error(error));
            


                console.log(e.target.value)  }
            }
    // }
    return<div className="header" >
        <div></div>
        <div><h1>Search by book name: </h1>
        <input onKeyUp={onInput} type="text"/> </div>
        <div  className="bookshelf" ><Link to={'./shelf'}> My bookshelf</Link></div>

    </div>
}
export default Header;