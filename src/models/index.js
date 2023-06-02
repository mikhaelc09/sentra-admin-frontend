'use strict';

import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env.NODE_ENV || 'development';
import conf from '../config/config.js';
const config = conf[env];
const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

import Absensi from './Absensi.js';
import Constant from './Constant.js';
import Divisi from './Divisi.js';
import DPenggajian from './DPenggajian.js';
import HPenggajian from './HPenggajian.js';
import Izin from './Izin.js';
import Jadwal from './Jadwal.js';
import Karyawan from './Karyawan.js';
import Lembur from './Lembur.js';
import LokasiPenting from './LokasiPenting.js';

db["Absensi"] = Absensi(sequelize, Sequelize);
db["Constant"] = Constant(sequelize, Sequelize);
db["Divisi"] = Divisi(sequelize, Sequelize);
db["DPenggajian"] = DPenggajian(sequelize, Sequelize);
db["HPenggajian"] = HPenggajian(sequelize, Sequelize);
db["Izin"] = Izin(sequelize, Sequelize);
db["Jadwal"] = Jadwal(sequelize, Sequelize);
db["Karyawan"] = Karyawan(sequelize, Sequelize);
db["Lembur"] = Lembur(sequelize, Sequelize);
db["LokasiPenting"] = LokasiPenting(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db["Karyawan"].getBelumGajian = async (month) => {
  const dataNikWithPenggajian = await db["HPenggajian"].findAll({
    where: Sequelize.where(
      Sequelize.fn('MONTH', Sequelize.col('tanggal')), month
    ),
    attributes: ['nik'],
    raw: true
  })
  const nikWithPenggajian = dataNikWithPenggajian.map((item) => item.nik)
  const availableKaryawan = await db["Karyawan"].findAll({
    where:{
      nik:{
        [Sequelize.Op.notIn]: nikWithPenggajian
      }
    },
    raw: true
  })
  return availableKaryawan
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
