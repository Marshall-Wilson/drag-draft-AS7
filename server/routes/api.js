const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./users.js');
const queenRouter = require('./queens.js');
const weekRouter = require('./weeks.js');
const earnerRouter = require('./earners.js');
const earnerTypeRouter = require('./earnerTypes.js');


const sequelize = require('../db/db.js');

// Initialize and update database
sequelize.sync({ alter: true });

/* GET api information */
apiRouter.get('/', (req, res, next) => {
    res.send("This is the api!");
});

apiRouter.use('/users', userRouter);
apiRouter.use('/queens', queenRouter);
apiRouter.use('/weeks', weekRouter);
apiRouter.use('/earners', earnerRouter);
apiRouter.use('/earnerTypes', earnerTypeRouter);

module.exports = apiRouter;