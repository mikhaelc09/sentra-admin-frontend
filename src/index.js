import path from "path";
import express from "express";
import adminJS from "./config/admin.js";
import AdminJSExpress from "@adminjs/express";
import { dirname } from "./utils/pathUtils.js";
import * as dotenv from "dotenv";
import db from "./models/index.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(dirname, "/")));
app.use('./pdf', express.static(path.join(dirname, "/pdf")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);
app.get("/admin/logout", (req, res) => {
  res.redirect("/login");
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
  await db["Constant"].update(
    {
      intvalue: parseInt(gajiPokok),
    },
    {
      where: {
        id: 1,
      },
    }
  );
  await db["Constant"].update(
    {
      intvalue: parseInt(tunjanganPerusahaan),
    },
    {
      where: {
        id: 2,
      },
    }
  );
  await db["Constant"].update(
    {
      intvalue: parseInt(uangMakan),
    },
    {
      where: {
        id: 3,
      },
    }
  );
  await db["Constant"].update(
    {
      intvalue: parseInt(uangTransportasi),
    },
    {
      where: {
        id: 4,
      },
    }
  );
  await db["Constant"].update(
    {
      intvalue: parseInt(feeLembur),
    },
    {
      where: {
        id: 5,
      },
    }
  );
  await db["Constant"].update(
    {
      intvalue: parseInt(BPJSKesehatan),
    },
    {
      where: {
        id: 6,
      },
    }
  );
  return res.status(201).send({
    message: "Setting berhasil diubah",
  });
});
app.use(adminJS.options.rootPath, adminJSRouter);

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}${adminJS.options.rootPath}`
  );
});
