//Como leer un json en ESModules
//import fs from 'node:fs'
//const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

//Forma recomendada de lee json en ESModules

import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)