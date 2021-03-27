const express = require("express");
const { render } = require("../app");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}).then((celebritiesFromDB) => {
    console.log(celebritiesFromDB);
    res.render("celebrities/index.hbs", { celebritiesFromDB });
  });
});

router.get("celebrities/new.hbs", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id).then((celebrityFromDB) => {
    res.render("celebrities/show.hbs", celebrityFromDB);
  });
});

router.post("/celebrities");

module.exports = router;
