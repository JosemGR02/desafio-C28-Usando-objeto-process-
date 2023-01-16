
// process.on('message', (datos) => {
//     process.send(generadorNumRandoms(datos))
// })


// export default { objetoUtils };

// export default { generadorNumRandoms };



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



// for (let c = 0; c < arrayNumSinRepetir.length; c++) {
//     console.log("El numero " + elNumero + " se repitio " + vecesRepetido + "veces");
// }


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// // array de objetos
// var objecto = { name: 'Bhavansh', value: 2 };
// var array = [];

// // meter el objeto al array
// array.push(objecto);

// // acceder a los valores
// console.log(array[0].name);

// console.log(array[0].value);


// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// util-random (operacion)

// Proceso padre (rutaRandoms)


// import { fork } from 'child_process';


// const subProcess = fork('./subproceso.js')


// subProcess.on('mensaje', mensaje => {
//     console.log(`Resultado del subProceso: `, mensaje)
// })




/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



// Subproceso


// import { numerosRandoms } from './operacion.js';


// const resultado = numerosRandoms();


// process.send(`Resultado de la operacion: ${resultado}`);
// process.exit();



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



//operacion


// import { numeroQuery } from '../Rutas/rutaRandoms.js';

// const numerosRandoms = (numeroQuery) => {
//     let suma = 0;
//     for (let i = 0; i < numeroQuery; i++) {
//         suma += 1;
//     }
//     return suma;
// }

// export { numerosRandoms };


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


//ivan

// router.get('/calculo-nobloq', (req, res) => {

//     const forked = fork('src/factory/child.js')

//     forked.on('message', msg => {
//         if (msg == 'listo') {
//             forked.send('Hola, ')
//         } else {
//             res.send('el resultado de la suma es: ' + msg)
//         }
//     })

// });

// export default router;



// process.on('message', msg => {

//     const sum = () => {
//         let sum = 0;
//         for (let i = 0; i < 5e9; i++) {
//             sum += 1;
//         }
//         return sum;
//     }

//     let result = sum()

//     process.send(`${result}`)
//     process.exit()
// })

// process.send('listo')