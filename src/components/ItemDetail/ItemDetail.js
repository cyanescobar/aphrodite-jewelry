import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({item}) => {
  return (
    <div className="row">
     <div className="col-md-4 offset-md-4">
        <img src={item.img} className="img-fluid"alt={item.name}></img>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div>
        <ItemCount stockItems={10}/>
     </div>
     </div>
  )
}

export default ItemDetail