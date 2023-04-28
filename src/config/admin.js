const AdminJS = require('adminjs');
const SequelizeAdapter = require('@adminjs/sequelize');
const sequelize = require('../models/index');
const resources = require('./resource.js');
const ComponentLoader = AdminJS.ComponentLoader

const loader = new ComponentLoader()
const Components  = {
    Dashboard: loader.add('Dashboard', '../components/Dashboard.jsx')
}
console.log(Components)
console.log(loader)
AdminJS.registerAdapter({
    Resource:SequelizeAdapter.Resource,
    Database:SequelizeAdapter.Database
})
const adminJsOptions = {
    dashboard:{
        component: Components.Dashboard
    },
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