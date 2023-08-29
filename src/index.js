import path from "path";
import express from "express";
import adminJS from "./config/admin.js";
import AdminJSExpress from "@adminjs/express";
import bcrypt from 'bcryptjs';
import { dirname } from "./utils/pathUtils.js";
import * as dotenv from "dotenv";
import db from "./models/index.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(dirname, "/")));
app.use('./pdf', express.static(path.join(dirname, "/pdf")))

// const adminJSRouter = AdminJSExpress.buildRouter(adminJS);
const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate: async (email, password) => {
    const user = await db["Karyawan"].findOne({ where: { email } });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user;
      }
    }
    return false;
  },
  cookiePassword: process.env.JWT_SECRET,
});

app.get("/admin/logout", (req, res) => {
  res.redirect("/admin/login");
});
app.put("/api/setting", async (req, res) => {
  const {
    gajiPokok,
    tunjanganPerusahaan,
    uangMakan,
    uangTransportasi,
    feeLembur,
    BPJSKesehatan,
  } = req.body;
  const constUpdates = [
    gajiPokok,
    tunjanganPerusahaan,
    uangMakan,
    uangTransportasi,
    feeLembur,
    BPJSKesehatan,
  ]
  constUpdates.forEach((value, index) => {
    (async () => {
      await db["Constant"].update(
        { intvalue: parseInt(value) },
        { where: { id: index + 1 } }
      )
    })()
  })
  return res.status(201).send({
    message: "Setting berhasil diubah",
  });
});
app.use(adminJS.options.rootPath, adminJSRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}${adminJS.options.rootPath}`
  );
});
