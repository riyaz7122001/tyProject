import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>
      <span>
        {moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}
      </span>
      <p className="order_id">{order.id}</p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          dollar={item.dollar}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):&nbsp;<strong>{value}</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        hideButton
      />
    </div>
  );
}

export default Order;
