import AbsensiResource from "./AbsensiResource.js";
import DivisiResource from "./DivisiResource.js";
import DPenggajianResource from "./DPenggajianResource.js";
import HPenggajianResource from "./HPenggajianResource.js";
import IzinResource from "./IzinResource.js";
import JabatanResource from "./JabatanResource.js";
import JadwalResource from "./JadwalResource.js";
import KaryawanResource from "./KaryawanResource.js";
import LemburResource from "./LemburResource.js";
import LokasiPentingResource from "./LokasiPentingResource.js";

const no_parent = {
    options:{
        parent:{
            name:'',
            icon:'Home'
        }
    }
}

const resources = [
    {...AbsensiResource, ...no_parent},
    {...DivisiResource, ...no_parent},
    {...DPenggajianResource, ...no_parent},
    {...HPenggajianResource, ...no_parent},
    {...IzinResource, ...no_parent},
    {...JadwalResource, ...no_parent},
    {...JabatanResource, ...no_parent},
    {...KaryawanResource, ...no_parent},
    {...LemburResource, ...no_parent},
    {...LokasiPentingResource, ...no_parent},
]

console.log(resources)

export default resources