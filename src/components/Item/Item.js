import "../Item/Item.css";
import React from "react";
import {Link} from "react-router-dom";


const Item = ({item}) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="container">
        <div className="card border border-0">
          <img src= {item.img} className="card-img-top ItemImg" alt={item.name}></img>
           <div className="card-body text-center">
            <p className="card-text-name">{item.name}</p>
           </div>
           <div className="card-body text-center">
            <p className="card-text">{item.description}</p>
           </div>
        </div>
      </div>
    </Link>
  )
}

export default Item;