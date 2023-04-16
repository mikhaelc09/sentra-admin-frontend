const path = require('path');
const express = require('express');
const adminJS = require('./config/admin.js');
const AdminJSExpress = require('@adminjs/express');
const { fileURLToPath } = require('url');
const PORT = 3000

const app = express()
// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/")));
app.use(adminJS.options.rootPath, AdminJSExpress.buildRouter(adminJS))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${adminJS.options.rootPath}`);
})