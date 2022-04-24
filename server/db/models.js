const { DataTypes } = require('sequelize');
const sequelize = require('./db');

exports.userModel = (sequelize) => {
    sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        points: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
};

exports.queenModel = (sequelize) => {
    sequelize.define('Queen', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        eliminated: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        points: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
}

exports.weekModel = (sequelize) => {
    sequelize.define('Week', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        info: {
            type: DataTypes.STRING
        }
    });
}

exports.earnerTypeModel = (sequelize) => {
    sequelize.define('EarnerType', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        category: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'other'
        },
        value: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
}

exports.earnerModel = (sequelize) => {
    sequelize.define('Earner', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    });
}