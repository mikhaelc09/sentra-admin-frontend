import AdminJS from 'adminjs';
import path from 'path';
import SequelizeAdapter from '@adminjs/sequelize';
import sequelize from '../models/index.js';
import resources from './resource.js';
import pages from '../components/pages/index.js';
import { loader as componentLoader, Components } from '../components/index.js';

AdminJS.registerAdapter({
    Resource:SequelizeAdapter.Resource,
    Database:SequelizeAdapter.Database
})
const adminJsOptions = {
    dashboard:{
        component: Components.Dashboard
    },
    pages,
    resources: resources,
    rootPath: '/admin',
    logoutPath: '/admin/logout',
    branding: {
        companyName: 'Sentra Medika Surabaya',
        logo: '../assets/logo_white.png',
        withMadeWithLove: false,
        favicon: '../assets/logo_white.png',
    },
    database:sequelize,
    adapter:SequelizeAdapter,
    assets:{
        styles:["../styles/sidebar.css"]
    },
    componentLoader
}

const adminJS = new AdminJS(adminJsOptions)

adminJS.watch()

export default adminJS