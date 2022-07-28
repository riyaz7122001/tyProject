import React from "react";
import Header from "./Header/Header";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CheckoutCarousel from "./Home/CheckoutCarousel";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div>
      <Header />

      <div className="checkout">
        <div className="checkout_left">
          <CheckoutCarousel />
          {/* <img
            className="checkout_image_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          /> */}
          <div>
            <h3>Hello, {!user ? "Guest" : user.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket </h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                dollar="$"
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
