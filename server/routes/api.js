var express = require('express');
var apiRouter = express.Router();
var sequelize = require('../db/db.js');

// Initialize and update database
sequelize.sync({ alter: true });

/* GET api information */
apiRouter.get('/', function(req, res, next) {
    res.send("This is the api!");
});

module.exports = apiRouter;