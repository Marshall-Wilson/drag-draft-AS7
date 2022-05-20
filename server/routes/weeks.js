const express = require('express');
const weekRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET weeks listing. */
weekRouter.get('/', (req, res, next) => {
    sequelize.models.Week.findAll()
        .then(weeks => res.send(weeks))
        .catch(err => res.error(err));
});

weekRouter.post('/', (req, res, next) => {
    sequelize.models.Week.create(req.body)
        .then(week => res.send(week))
        .catch(err => next(err));
})

weekRouter.get('/:id', (req, res, next) => {
    sequelize.models.Week.findByPk(req.params.id)
        .then(week => res.send(week))
        .catch(err => next(err));
});

weekRouter.get('/:id/earners', (req, res, next) => {
    sequelize.models.Week.findByPk(req.params.id)
        .then(week => {
            week.getEarners()
                .then(async earners => {
                    const newEarners = [];
                    for (const earner of earners) {
                        const type = await earner.getEarnerType();
                        const queen = await earner.getQueen();
                        newEarners.push({
                            id: earner.id,
                            points: earner.points,
                            earnerName: type.name,
                            earnerDescription: type.description,
                            queenName: queen.name
                        })
                    }
                    res.send(newEarners);
                });
        })
        .catch(err => next(err));
});


module.exports = weekRouter;