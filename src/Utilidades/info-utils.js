
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Utils Info |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


const argumentosEntrada = process.argv.slice(2)
const pathEjecucion = process.execPath
const nombrePlataforma = process.platform
const processId = process.pid
const versionNode = process.version
const carpetaDeProyecto = process.cwd()
const memoriaTotalReservada = process.memoryUsage().rss


export const INFO_UTILS = {
    argumentosEntrada,
    pathEjecucion,
    nombrePlataforma,
    processId,
    versionNode,
    carpetaDeProyecto,
    memoriaTotalReservada
}
