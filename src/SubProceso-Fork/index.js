
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Subproceso |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// import { generadorNumRandoms } from '../Utilidades/utils-randoms.js';
// // import { generadorNumRandoms } from '../Utilidades/utils-randoms.js';


// const resultadoUtils = generadorNumRandoms();
// console.log(resultadoUtils)

// process.send(`Resultado de la operacion de Utils: ${resultadoUtils}`);

// // process.exit();



import { RANDOMS_UTILS } from '../Utilidades/utils-randoms.js';

process.on('message', (cantidadNumPedidos) => {

    console.log(`cantidad: ${cantidadNumPedidos}`);
    const resultadoUtils = RANDOMS_UTILS.generadorNumRandoms(cantidadNumPedidos);

    process.send(`Resultado de la operacion de Utils: ${resultadoUtils}`);
});