import path from 'path';
import express from 'express';
import adminJS from './config/admin.js';
import AdminJSExpress from '@adminjs/express';
import { dirname } from './utils/pathUtils.js'
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(dirname, "/")));
const adminJSRouter = AdminJSExpress.buildRouter(adminJS)
app.get('/admin/logout', (req, res) => {
    res.redirect('/login')
})
app.use(adminJS.options.rootPath, adminJSRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${adminJS.options.rootPath}`);
})