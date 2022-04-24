const express = require('express');
const queenRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET queens listing. */
queenRouter.get('/', (req, res, next) => {
    sequelize.models.Queen.findAll()
        .then(queens => res.send(queens))
        .catch(err => res.error(err));
});

queenRouter.post('/', (req, res, next) => {
    sequelize.models.Queen.create(req.body)
        .then(async queen => res.send(queen))
        .catch(err => next(err));
})

queenRouter.get('/:id', (req, res, next) => {
    sequelize.models.Queen.findByPk(req.params.id)
        .then(queen => res.send(queen))
        .catch(err => next(err));
});



module.exports = queenRouter;