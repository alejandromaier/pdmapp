import {sitio} from './config'
const baseurl = 'http://45.55.68.206:3000/api/'

const get = (url) => fetch(`${baseurl}${url}`).then(r => r.json())

export const buscarListaDeCantos = () => get(`${sitio}/cantos`)

export const buscarCanto = (id) => get(`cantos/${id}`)

export const buscarCantosPorNombre = (nombre) => get(`${sitio}/search=${nombre}`)
