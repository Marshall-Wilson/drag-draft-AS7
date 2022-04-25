const express = require('express');
const earnerTypeRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET earnerTypes listing. */
earnerTypeRouter.get('/', (req, res, next) => {
    sequelize.models.EarnerType.findAll()
        .then(earnerTypes => res.send(earnerTypes))
        .catch(err => res.error(err));
});

earnerTypeRouter.post('/', (req, res, next) => {
    sequelize.models.EarnerType.create(req.body)
        .then(async earnerType => res.send(earnerType))
        .catch(err => next(err));
})

earnerTypeRouter.get('/:id', (req, res, next) => {
    sequelize.models.earnerType.findByPk(req.params.id)
        .then(earnerType => res.send(earnerType))
        .catch(err => next(err));
});

module.exports = earnerTypeRouter;