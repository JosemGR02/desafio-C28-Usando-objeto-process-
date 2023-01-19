
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Ruta Randoms |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


import { Router } from 'express';
import { fork } from 'child_process';

const ruta = Router();  // Por ej: /randoms?cantidad=20000


ruta.get("/:cantidad?", (solicitud, respuesta) => {
    try {
        const cantidadNumPedidos = solicitud.query.cantidad || 100000000; //probar con 500000000

        const subProceso = fork('./src/SubProceso-Fork/index.js');
        //const subProceso = fork('./src/Utilidades/utils-randoms.js');

        subProceso.send({ respuesta: Number(cantidadNumPedidos) });

        subProceso.on('message', (resultadoUtils) => {
            console.log({ resultadoUtils })

            respuesta.render('view/randoms', { respuesta: resultadoUtils })
        })
    } catch (error) {
        respuesta.send(error, 'Error en la ruta Randoms');
    }
})

export { ruta as RutaRandoms };




// app.get("/random/:cant?", (req, res) => {

//     const forked = fork('./utils/generateRandom.js');

//     let cant = +req.params.cant || 100000000;

//     forked.send(cant);

//     forked.on('message', (numeros) => {

//     res.send(numeros.res);

//     })

// })



