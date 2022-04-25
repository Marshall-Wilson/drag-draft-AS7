const express = require('express');
const earnerRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET earners listing. */
earnerRouter.get('/', (req, res, next) => {
    sequelize.models.Earner.findAll()
        .then(earners => res.send(earners))
        .catch(err => res.error(err));
});

earnerRouter.post('/', async(req, res, next) => {
    const type = await sequelize.models.EarnerType.findByPk(req.body.earnerType)
    sequelize.models.Earner.create({ points: type.value })
        .then(async earner => {
            earner.setEarnerType(req.body.earnerType);
            earner.setQueen(req.body.queen);
            earner.setWeek(req.body.week);
            res.send(earner);
        })
        .catch(err => next(err));
})

earnerRouter.get('/:id', (req, res, next) => {
    sequelize.models.Earner.findByPk(req.params.id)
        .then(earner => res.send(earner))
        .catch(err => next(err));
});



module.exports = earnerRouter;