'use strict'

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

module.exports = {
    compose,

}