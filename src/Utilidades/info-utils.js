
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Utils Info |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// .slice(2)
const argumentosEntrada = process.argv
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
