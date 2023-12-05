import AdminJS from "adminjs";
import SequelizeAdapter from "@adminjs/sequelize";
import sequelize from "../models/index.js";
import resources from "./resource.js";
import pages from "../components/pages/index.js";
import { loader as componentLoader, Components } from "../components/index.js";
import * as dotenv from 'dotenv'
import dashboardFetcher from "../hooks/dashboardFetcher.js";
dotenv.config()

AdminJS.registerAdapter({
  Resource: SequelizeAdapter.Resource,
  Database: SequelizeAdapter.Database,
});

const adminJsOptions = {
  dashboard: {
    component: Components.Dashboard,
    handler: dashboardFetcher,
  },
  pages,
  resources: resources,
  rootPath: "/admin",
  logoutPath: "/admin/logout",
  branding: {
    companyName: "Sentra Medika Surabaya",
    logo: "/assets/logo_white.png",
    withMadeWithLove: false,
    favicon: "/assets/logo_white.png",
  },
  database: sequelize,
  adapter: SequelizeAdapter,
  assets: {
    styles: ["/styles/sidebar.css"],
  },
  componentLoader,
  locale: {
    language: "en",
    availableLanguage: ["en", "id"],
  },
};

const adminJS = new AdminJS(adminJsOptions);

if(process.env.NODE_ENV === 'production') {
  await adminJS.initialize();
}
else adminJS.watch();

export default adminJS;
