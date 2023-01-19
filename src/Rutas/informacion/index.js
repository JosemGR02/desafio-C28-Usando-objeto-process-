

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Ruta Informacion |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


import { Router } from "express";
import { INFO_UTILS } from "../../Utilidades/index.js";


const ruta = Router();


ruta.get("/", (solicitud, respuesta) => {
    try {
        const datos = INFO_UTILS

        respuesta.render('view/info', { success: true, datos });

    } catch (error) {
        respuesta.send(error, 'Error al enviar la informacion: ');
    }
})

export { ruta as RutaInfo };





