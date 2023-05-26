import { response } from "express"
import db from '../models/index.js';
import pkg from 'adminjs'
const { flat } = pkg

const getKaryawan = () => 
    async(res, req) => {
        if(req.method.toLowerCase() !== 'get'){
            return res
        }   
        const id = parseInt(req.params.recordId)
        
        const karyawan = await db.Karyawan.findAll({
            where:{
                id_divisi: id
            },
            raw:true
        })
        const params = flat.unflatten(res.record.params)
        params.karyawan = karyawan.map((k) => ({
            profil:{
                nik: k.nik,
                nama: k.nama,
                email: k.email,
                status: k.status
            }
        }))
        res.record.params = flat.flatten(params)

        return res
    }

export default getKaryawan
