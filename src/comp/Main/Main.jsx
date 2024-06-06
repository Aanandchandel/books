import "./main.css"
import { nanoid } from "nanoid";
import { useEffect,useState,useContext } from "react";
import { booksContext } from "../../context";
import Card from "../card/Card";
const Main=()=>{

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
const {books,setBooks}=useContext(booksContext)
// const [books,setBooks]=useState([])

useEffect(() => {
    // getData(`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=${count}`)
        getData(`https://openlibrary.org/search.json?q=books&limit=10&page=1`)
        .then(data => {
            if (data && data.docs) {
                setBooks(data.docs);
            }
        })
        .catch(error => console.error(error));
    
}, []);
    return(<div className="main">

        {!books[0]&&<h1>searching...</h1>}
        <div className="maindiv">

        {books.map((item)=>{
            
            return(
                <Card add={true} key={nanoid} data={{name:item.title,count:item.edition_count}}/>
            )
        })}




        </div>
    </div>)
}
export default Main;