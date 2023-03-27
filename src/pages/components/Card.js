import React from "react";
import Link from "next/link";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="item-img" src={item.image} />
      </div>
      <div className="card-details">
        <h2>{item.title}</h2>
        <div className="card-price-rate">
          <p>$ {item.price}</p>
          <p>{item.rating.rate}</p>
        </div>
      </div>
      <Link className="button-outlined" href="/">
        View Product
      </Link>
    </div>
  );
}

export default Card;
