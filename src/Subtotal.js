import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
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
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
