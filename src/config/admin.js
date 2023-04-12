import AdminJS from 'adminjs'
import SequelizeAdapter from '@adminjs/sequelize'
import sequelize from './database.js'
import resources from '../resources/index.js';

AdminJS.registerAdapter({
    Resource:SequelizeAdapter.Resource,
    Database:SequelizeAdapter.Database
})
const adminJsOptions = {
    resources: resources,
    rootPath: '/admin',
    branding: {
        companyName: 'Sentra Medika Surabaya',
        logo: '../assets/logo_white.png'
    },
    database:sequelize,
    adapter:SequelizeAdapter,
    assets:{
        styles:["../styles/sidebar.css"]
    }
}

const adminJS = new AdminJS(adminJsOptions)

export default adminJS