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
// app.get("/items/seed", async (req, res) => {
//   //Clear database
//   await Item.deleteMany({});
//   // Create a list of items into our database
//   await Item.create(itemData);
//   res.redirect("/items");
// });

// Home route
app.get("/", (req, res) => {
  res.render("Home");
});

// New route
app.get("/items/new", (req, res) => {
  res.render("New");
});

// Index route
app.get("/items", (req, res) => {
  Item.find({}, (error, allItems) => {
    res.render("Index", {
      items: allItems,
    });
  });
});

// Post route
app.post("/items", (req, res) => {
  Item.create(req.body, (error, item) => {
    res.redirect("/items");
  });
});

// Show route
app.get("/items/:id", (req, res) => {
  Item.findById(req.params.id, (error, foundItem) => {
    res.render("Show", {
      item: foundItem,
    });
  });
});

// Edit route
app.get("/items/:id/edit", (req, res) => {
  Item.findById(req.params.id, (error, foundItem) => {
    if (!error) {
      res.render("Edit", {
        item: foundItem,
      });
    } else {
      res.send({
        message: error.message,
      });
    }
  });
});

// Update route
app.put("/items/:id", (req, res) => {
  Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedItem) => {
      res.redirect(`/items/${req.params.id}`);
    }
  );
});

// Category route
app.get("/:animal/:category", (req, res) => {
  Item.find(
    { animal: req.params.animal, category: req.params.category },
    (error, foundItems) => {
      res.render("Category", {
        items: foundItems,
        animal: req.params.animal,
        category: req.params.category,
      });
    }
  );
});

// Animal route
app.get("/:animal", (req, res) => {
  res.render("Animal", {
    animal: req.params.animal,
  });
});

// Delete route
app.delete("/items/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect("/items");
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
