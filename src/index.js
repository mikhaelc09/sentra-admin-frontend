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
const adminJSRouter = AdminJSExpress.buildRouter(adminJS)
app.get('/admin/logout', (req, res) => {
    res.redirect('/login')
})
app.use(adminJS.options.rootPath, adminJSRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${adminJS.options.rootPath}`);
})