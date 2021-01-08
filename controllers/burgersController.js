const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


// get all data
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const handlebarsObject = {
      burgers: data,
    };
    res.render("index", handlebarsObject);
  });
});

// add new data
router.post("/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (addon) {
    res.redirect("/");
    console.log("added burger");
  });
});

// update data
router.put("/api/eat-burgers/:id", function (req, res) {
  router.post("/updateOne/:id", function (req, res) {
    var colVal = "id";
    var id = req.params.id;
    burger.updateOne(colVal, id, function () {
      res.redirect("/");
    });
  });
});

// delete data
router.delete("/api/delete-burgers/:id", function (req, res) {
  burger.deleteOne(req.params.id, function (err, data){
    if (err) {
      res.status(500).end();
    } else if (data.affectedRows == 0){
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
