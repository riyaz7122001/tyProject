import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Payment from "./Payment";
import Home from "./Home/Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import NewSignup from "./NewSignup";
import NewLogin from "./newLogin";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51L0TupSJOxrqu6c3rLgwNTmdmZfOOJxtMG0aMgUZMcSL85Bt8LXJHfWkgiXMuwOkBCRHpIwFgx3tH19gSRU3DYej00Kv4ptVYU"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this is user :", authUser);

      if (authUser) {
        //user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<NewLogin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<NewSignup />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
