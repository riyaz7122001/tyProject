const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51L0TupSJOxrqu6c3rLgwNTmdmZfOOJxtMG0aMgUZMcSL85Bt8LXJHfWkgiXMuwOkBCRHpIwFgx3tH19gSRU3DYej00Kv4ptVYU"
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Api

// App Config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());
//Api routes
app.get("/", (req, res) => {
  res.status(200).send("<h3>Hello Friends...</h3>");
});

app.post("/payment/create", async (req, res) => {
  const total = reuest.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - Created..
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen commands
exports.api = functions.https.onRequest(app);

// example endpoints to show the result
// firebase emulators:start
// http://localhost:5001/clone-41beb/us-central1/api
