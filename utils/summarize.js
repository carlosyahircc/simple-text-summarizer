'use strict'
const { compose } = require('./others.js')


const allMinuscule = text => text.toLowerCase()

const limpiaDePalabras = text =>
    text.match(/[\wäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ\u00f1\u00d1]+/g)

const sentences = text =>
    text.match(/[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ-\u00f1\u00d1:"()–-]+/g)

const addDictionaryValues = value => Object.values(value).reduce((acc, el) => acc + el)

const halfOfText = sum => Dictionary => parseInt(sum / Object.keys(Dictionary).length)



const filterValues = value => list => Object.entries(list).filter(x => x[0] == value)

const siExistePalabra = oracion => Diccionario => Object.keys(Diccionario).indexOf(oracion)



const textoResumido = mitad => Diccionario => {
    let resumen = ""
    Object.keys(Diccionario).forEach(oracion => {
        if (Diccionario[oracion] > (1.4 * mitad)) {
            resumen += " " + oracion
        }
    })
    return resumen
}


const listaDePalabras = text => text.reduce((acc, el) => {
    let minuscula = el.toLowerCase()
    if (acc[minuscula]) acc[minuscula]++
        else acc[minuscula] = 1
    return acc
}, {})

const iterarPalabras = oracion => lista => Diccionario => Object.keys(lista).forEach(palabra => {
    if (oracion.includes(palabra)) {
        let suma = filterValues(palabra)(lista)
        let check = siExistePalabra(oracion)(Diccionario)
        if (check > -1) Diccionario[oracion] += suma[0][1]
        else Diccionario[oracion] = suma[0][1]
    }
})

const iterarOraciones = oraciones => lista => {

    let Diccionario = {}
    oraciones.forEach(oracion => {
        iterarPalabras(oracion)(lista)(Diccionario)

    })

    return Diccionario
}


const limpiarTexto = compose(limpiaDePalabras, allMinuscule)

const limpiarOraciones = compose(sentences, allMinuscule)



module.exports = {
    limpiarTexto,
    limpiarOraciones,
    iterarOraciones,
    listaDePalabras,
    addDictionaryValues,
    halfOfText,
    textoResumido




}