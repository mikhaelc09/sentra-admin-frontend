import  { getAbsolutePath } from '../utils/pathUtils.js'
import pkg from 'adminjs';
const { ComponentLoader } = pkg

const loader = new ComponentLoader()
const Components  = {
  DateField: loader.add('DateField', getAbsolutePath('./components/DateField.jsx')),
  Dashboard: loader.add('Dashboard', getAbsolutePath('./components/Dashboard.jsx')),
  ListKaryawan: loader.add('ListKaryawan', getAbsolutePath('./components/ListKaryawan.jsx')),
  WorkHour: loader.add('WorkHour', getAbsolutePath('./components/WorkHour.jsx')),
}

export {
    Components,
    loader
}