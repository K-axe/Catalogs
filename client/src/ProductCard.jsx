import React from "react";
import "../src/ProductCard.css";
const ProductCard = (props) => {
  const priceBeforeDiscount =
    (props.price * 100) / (100 - props.discountPercentage);
  return (
    <div className="ProductCard">
      <img src={props.thumbnail} alt={props.title} />
      <div className="d-flex">
        <p className="mb-0 ml-2">{props.title}</p>
        <span>{props.discountPercentage}%</span>
      </div>

      <div className="price">
        <div className="price-after-discount">
          {props.price}
          </div>
        <div className="price-before-discount">
          {priceBeforeDiscount.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
