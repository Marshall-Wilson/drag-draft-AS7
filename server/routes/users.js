const express = require('express');
const userRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET users listing. */
userRouter.get('/', (req, res, next) => {
    sequelize.models.User.findAll()
        .then(users => res.send(users))
        .catch(err => res.error(err));
});

userRouter.post('/', (req, res, next) => {
    sequelize.models.User.create({ name: req.body.name })
        .then(async user => {
            if (req.body.queens) { await user.setQueens(req.body.queens) }
            res.send(user);
        })
        .catch(err => next(err));
})

userRouter.get('/points', (req, res, next) => {
    sequelize.models.User.findAll()
        .then(async users => {
            for (let i in users) {
                let user = users[i];
                const userQueens = await user.getQueens();
                const points = userQueens.reduce((prev, curr) => prev + curr.points, 0);
                user.points = points;
                await user.save();
            }
            res.send(users);
        })
        .catch(err => next(err));
});

userRouter.put('/update', (req, res, next) => {
    sequelize.models.User.findAll()
        .then(async users => {
            for (let i in users) {
                let user = users[i];
                let userQueens = await user.getQueens();
                user.points = 0;
                for (let i in userQueens) {
                    user.points += userQueens[i].points;
                }
                await user.save();
            }
            res.send(users);
        })
        .catch(err => next(err));
});

userRouter.get('/:id', (req, res, next) => {
    sequelize.models.User.findByPk(req.params.id)
        .then(user => res.send(user))
        .catch(err => next(err));
});

userRouter.get('/:id/queens', (req, res, next) => {
    sequelize.models.User.findByPk(req.params.id)
        .then(user => user.getQueens()
            .then(queens => res.send(queens))
            .catch(err => next(err)))
        .catch(err => next(err));
});



module.exports = userRouter;