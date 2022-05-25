const express = require('express');
const queenRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET queens listing. */
queenRouter.get('/', (req, res, next) => {
    sequelize.models.Queen.findAll({
            order: [
                ['eliminated', 'ASC'],
                ['name', 'ASC']
            ]
        })
        .then(queens => res.send(queens))
        .catch(err => res.error(err));
});

queenRouter.post('/', (req, res, next) => {
    sequelize.models.Queen.create(req.body)
        .then(async queen => res.send(queen))
        .catch(err => next(err));
})

queenRouter.put('/update', async(req, res, next) => {
    const queens = await sequelize.models.Queen.findAll();
    queens.forEach(async(queen) => {
        const earners = await queen.getEarners();
        const newPoints = earners.reduce((sum, earner) => {
            return sum + earner.points;
        }, 0);
        await updateStarsAndPlungers(queen, earners);
        queen.points = newPoints;
        await queen.save();
    })
    res.send(queens);
})

queenRouter.get('/:id', (req, res, next) => {
    sequelize.models.Queen.findByPk(req.params.id)
        .then(queen => res.send(queen))
        .catch(err => next(err));
});

queenRouter.put('/:id/eliminate', (req, res, next) => {
    sequelize.models.Queen.findByPk(req.params.id)
        .then(async queen => {
            queen.eliminated = true;
            await queen.save();
            res.send(queen);
        })
        .catch(err => next(err));
});

const updateStarsAndPlungers = async(queen, earners) => {
    let stars = 0;
    let plungers = 0;
    console.log(earners[0])
    for (let i in earners) {
        const earnerType = await earners[i].getEarnerType();
        if (earnerType.name === 'Legendary Legend Star') {
            stars += 1;
        } else if (earnerType.name === 'Blocking Plunger') {
            plungers += 1;
        }
    }
    queen.stars = stars;
    queen.plungers = plungers;
    await queen.save();
}

module.exports = queenRouter;