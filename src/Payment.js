import React from "react";
import "./Payment.css";
import axios from "./Axios";
import { useNavigate, NavLink } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Header from "./Header/Header";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
// import createHistory from "history/createBrowserHistory";

function Payment() {
  // const history = createHistory();
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [clientSecret, setclientSecret] = useState(true);
  useEffect(() => {
    return () => {
      const getClientSecret = async () => {
        // stripe expects the total in a currencies subunit
        const response = await axios({
          method: "post",
          url: `payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setclientSecret(response.data.clientSecret);
      };
      getClientSecret();
    };
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        // payment confirmation done here
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate.replace("/orders");
      });
  };
  const handleChange = (e) => {
    // Listen for the change in the CardElement
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div>
      <Header />
      <div className="payment">
        <div className="payment_container">
          <h2>
            Checkout(
            {
              <NavLink exact to="/checkout">
                {basket?.length}
                Items)
              </NavLink>
            }
          </h2>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Delievery Address</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p> 001-Siddhivinayak A.P.T</p>
              <p>Mumbai, 401107</p>
            </div>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delievery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                dollar={item.dollar}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total :{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
// 1800 180 5522
// pk_test_51L0TupSJOxrqu6c3rLgwNTmdmZfOOJxtMG0aMgUZMcSL85Bt8LXJHfWkgiXMuwOkBCRHpIwFgx3tH19gSRU3DYej00Kv4ptVYU;
