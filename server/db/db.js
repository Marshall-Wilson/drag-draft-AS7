const { Sequelize } = require('sequelize');
require('dotenv').config();
const models = require('./models.js');
const applyExtraSetup = require('./extra_setup.js');

// Config
const devConfig = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const prodConfig = process.env.DATABASE_URL;

// Initialize sequelize
const sequelize = new Sequelize(process.env.NODE_ENV === 'production' ? prodConfig : devConfig);

// Run and update models
models.userModel(sequelize);
models.queenModel(sequelize);
models.weekModel(sequelize);
models.earnerTypeModel(sequelize);
models.earnerModel(sequelize);

// Create associations
applyExtraSetup(sequelize);

module.exports = sequelize;