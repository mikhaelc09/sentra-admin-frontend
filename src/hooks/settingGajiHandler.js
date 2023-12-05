import db from "../models/index.js";

const getSettings = async (request, response, data) => {
    const gaji = await db["Constant"].findAll({
      raw: true,
    });
    return {
      uangMakan: gaji[0].intvalue,
      uangTransportasi: gaji[1].intvalue,
      feeLembur: gaji[2].intvalue,
      feeMCU: gaji[3].intvalue,
      BPJSKesehatan: gaji[4].intvalue,
    };
  }

  export default getSettings