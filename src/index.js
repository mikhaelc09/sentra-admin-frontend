import path from 'path';
import express from 'express';
import adminJS from './config/admin.js';
import AdminJSExpress from '@adminjs/express';
import { fileURLToPath } from 'url';
const PORT = 3000

const app = express()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/")));
app.use(adminJS.options.rootPath, AdminJSExpress.buildRouter(adminJS))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${adminJS.options.rootPath}`);
})