import { Components } from "../index.js";
import getSettings from "./handlers/settingGajiHandler.js";
import getMonitorAbsensiData from "./handlers/monitorAbsensiHandler.js";
import getLaporanAbsensi from "./handlers/laporanAbsensiHandler.js";

const pages = {
  SettingGaji: {
    label: "Setting Gaji",
    component: Components.SettingGaji,
    icon: "Settings",
    handler: getSettings,
  },
  MonitorAbsensi: {
    label: "Monitor Absensi",
    component: Components.MonitorAbsensi,
    icon: "List",
    handler: getMonitorAbsensiData,
  },
  LaporanAbsensi: {
    label: "Laporan",
    component: Components.LaporanAbsensi,
    icon: "FileText",
    handler: getLaporanAbsensi,
    
  },
};

export default pages;
