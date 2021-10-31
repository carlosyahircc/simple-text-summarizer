'use strict'

const {
    limpiarOraciones,
    limpiarTexto,
    iterarOraciones,
    listaDePalabras,
    sumarValoresDelDiccionario,
    mitadDelTexto,
    textoResumido
} = require('./utils/resumen.js')


const scriptResumen = (text) => {

    const textoLimpiado = limpiarTexto(text)

    const oracionesLimpias = limpiarOraciones(text)

    let lista = listaDePalabras(textoLimpiado)

    let diccionario = iterarOraciones(oracionesLimpias)(lista)
    let sumaTotal = sumarValoresDelDiccionario(diccionario)
    let mitad = mitadDelTexto(sumaTotal)(diccionario)
    return textoResumido(mitad)(diccionario)
}


module.exports = {
    scriptResumen
}