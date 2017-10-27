// Controller
const express = require("express");
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response){
    response.render("index");
});

module.exports = router;
