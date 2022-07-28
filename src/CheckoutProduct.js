import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({
  id,
  image,
  title,
  dollar,
  price,
  rating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const myFunction = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>{dollar}</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button className="btn" onClick={myFunction}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
