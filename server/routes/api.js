const express = require('express');
const apiRouter = express.Router();
const userRouter = require('./users.js');
const queenRouter = require('./queens.js');
const sequelize = require('../db/db.js');

// Initialize and update database
sequelize.sync({ alter: true });

/* GET api information */
apiRouter.get('/', (req, res, next) => {
    res.send("This is the api!");
});

apiRouter.use('/users', userRouter);
apiRouter.use('/queens', queenRouter);

module.exports = apiRouter;