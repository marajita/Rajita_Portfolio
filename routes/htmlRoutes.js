var db = require("../models");

// Dependencies
var express = require("express");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();


  router.get("/", function(req, res) {
      res.render("index");
  });
  

  /* // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
 */
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });


  module.exports = router;
