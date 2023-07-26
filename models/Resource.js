const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resource extends Model {}

Resource.init(
    {
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        location2: {
            type: DataTypes.STRING
        },
        credential: {
            type: DataTypes.STRING
        },
        pronouns: {
            type: DataTypes.STRING
        },
        organization: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        accepts_insurance: {
            type: DataTypes.BOOLEAN
        },
        insurance: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        social: {
            type: DataTypes.STRING
        },
        other: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestapms: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'resource'
    }
);

module.exports = Resource;