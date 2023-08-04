const sequelize = require('../config/connection');
const Resource = require ('../models/Resource');
const user = require ('../models/user')
const resourceData = require('./resourceData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    for (const resource of resourceData) {
        await Resource.create({
            ...resource
        });
    }
    process.exit(0);
};

seedDatabase();