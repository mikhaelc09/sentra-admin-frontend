import { Components } from "../index.js";
import getSettings from "../../hooks/settingGajiHandler.js";
import getMonitorAbsensiData from "../../hooks/monitorAbsensiHandler.js";
import getLaporanAbsensi from "../../hooks/laporanAbsensiHandler.js";

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
