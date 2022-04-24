var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
    res.send('Here are all the users');
});

module.exports = userRouter;