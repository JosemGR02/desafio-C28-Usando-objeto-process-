
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Subproceso |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { RANDOMS_UTILS } from '../Utilidades/utils-randoms.js';
// import { generadorNumRandoms } from '../Utilidades/utils-randoms.js';


let resultadoUtils = RANDOMS_UTILS();
// let resultadoUtils = generadorNumRandoms();


process.send(`Resultado de la operacion de Utils: ${resultadoUtils}`);

process.exit();