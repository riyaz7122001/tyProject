import { useEffect } from "react";
import { React, useState } from "react";
import Header from "./Header/Header";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div>
      <Header />
      <div className="orders">
        <h2>Your Orders</h2>
        <div className="order_orders">
          {orders.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
