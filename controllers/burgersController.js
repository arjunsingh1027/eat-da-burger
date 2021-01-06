const burger = require("../models/burger");
const router = require("express").Router();


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
router.post("/api/add-burgers", function (req, res) {
  const burger_name = req.body.burger_name;
  burger.insertOne(burger_name, function (result) {
    res.json({ id: result.insertId });
    console.log("added burger");
  });
});

// update data
router.put("/api/eat-burgers/:id", function (req, res) {
  const id = req.params.id;

  burger.updateOne(true, id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("burger eaten");
    }
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
