const AdminJS = require('adminjs');
const SequelizeAdapter = require('@adminjs/sequelize');
const sequelize = require('../models/index');
const resources = require('./resource.js');

AdminJS.registerAdapter({
    Resource:SequelizeAdapter.Resource,
    Database:SequelizeAdapter.Database
})
const adminJsOptions = {
    resources: resources,
    rootPath: '/admin',
    logoutPath: '/admin/logout',
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

module.exports = adminJS