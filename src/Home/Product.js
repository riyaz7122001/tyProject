import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
function Product({ id, title, dollar, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is a basket :" + basket);
  var addToBasket = () => {
    // dispatch the item in data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        dollar: dollar,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>{dollar}</small>&nbsp;
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <div className="product_image">
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
