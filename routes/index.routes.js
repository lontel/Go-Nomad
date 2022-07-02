const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("pages/index", { layout: false });
});


// ABOUT US

// CONTACT

module.exports = router;
