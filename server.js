const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Item = require("./models/item");
const itemData = require("./utilities/itemData");

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

// Seed route
app.get("/items/seed", async (req, res) => {
  //Clear database
  await Item.deleteMany({});
  // Create a list of items into our database
  await Item.create(itemData);
  res.redirect("/");
});

// Index route
app.get("/", (req, res) => {
  res.render("Index");
});

// Show route
app.get("/items/:id", (req, res) => {
  Item.findById(req.params.id, (error, foundItem) => {
    res.render("Show", {
      item: foundItem,
    });
  });
});

// Category route
app.get("/:animal/:category", (req, res) => {
  Item.find(
    { animal: req.params.animal, category: req.params.category },
    (error, foundItems) => {
      res.render("Category", {
        items: foundItems,
      });
    }
  );
});

// Animal route
app.get("/:animal", (req, res) => {
  Item.find({ animal: req.params.animal }, (error, foundItems) => {
    res.render("Animal", {
      items: foundItems,
    });
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
