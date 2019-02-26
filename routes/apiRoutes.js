var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/information", function(req, res) {
    db.Information.findAll({}).then(function(dbinfo) {
      res.json(dbinfo);
    });
  });

  // Create a new example
  app.post("/api/information", function(req, res) {
    db.Information.create(req.body).then(function(dbinfo) {
      res.json(true);
    });
  });

  // Delete an example by id
  app.delete("/api/information/:id", function(req, res) {
    db.Information.destroy({ where: { id: req.params.id } }).then(function(
      dbinfo
    ) {
      res.json(dbinfo);
    });
  });
};
