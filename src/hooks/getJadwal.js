import db from '../models/index.js';
import pkg from 'adminjs'
const { flat } = pkg

const getJadwal = () => 
    async(res, req) => {
        if(req.method.toLowerCase() !== 'get'){
            return res
        }
        const id = parseInt(req.params.recordId)
        
        const jadwal = await db.Jadwal.findAll({
            where:{
                nik: id
            },
            include:{
                model: db.LokasiPenting,
            },
            raw:true
        })
        
        const params = flat.unflatten(res.record.params)
        params.jadwal = jadwal.map((j) => ({
            hari: j.hari,
            jam_kerja: j.jam_kerja,
            lokasi: j["LokasiPenting.nama"],
        }))
        res.record.params = flat.flatten(params)

        return res
    }

export default getJadwal
