import AdminJS from 'adminjs';
import path from 'path';
import SequelizeAdapter from '@adminjs/sequelize';
import sequelize from '../models/index.js';
import resources from './resource.js';
import dirname from '../utils/pathUtils.js'
const ComponentLoader = AdminJS.ComponentLoader
console.log(ComponentLoader)
const loader = new ComponentLoader()
console.log(loader)
const Components  = {
    Dashboard: loader.add('Dashboard', path.join(dirname, './components/Dashboard.jsx'))
}
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

export default adminJS