import AdminJS from 'adminjs'
import SequelizeAdapter from '@adminjs/sequelize'
import sequelize from './database.js'
import resources from '../resources/index.js';

AdminJS.registerAdapter({
    Resource:SequelizeAdapter.Resource,
    Database:SequelizeAdapter.Database
})
const adminJS = new AdminJS({
    resources: resources,
    rootPath: '/admin',
    branding: {
        companyName: 'Sentra Medika Surabaya'
    },
    database:sequelize,
    adapter:SequelizeAdapter,
    assets:{
        // styles:["/sidebar.css"]
    }
})

export default adminJS