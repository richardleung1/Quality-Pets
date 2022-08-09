const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Item = require("./models/item");
const itemData = require("./utilities/itemData")

//mongoose connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/items/seed", async (req, res) => {
  //Clear database
  await Item.deleteMany({});
  // Create a list of pokemon into our database
  await Item.create(itemData);
  res.redirect("/item");
});

app.listen(port, () => {
    console.log("listening on port", port);
  });  