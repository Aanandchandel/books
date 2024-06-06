import "./shelf.css";
import Card from "../card/Card";
import { nanoid } from "nanoid";

const Shelf = () => {
    let books = JSON.parse(localStorage.getItem("data")) || [];
   

    return (
        <div className="shelf">
            <h3 className="selfh">My Bookshelf</h3>
            <div className="selfdiv" >


            {books.length > 0 ? (
                books.map((item) => (
                    <Card add={false} key={nanoid()} data={{ name: item.name, count: item.count }} />
                ))
            ) : (
                <h5>Not found</h5>
            )}
            </div>
        </div>
    );
};

export default Shelf;
