const { scriptResumen } = require('./scriptSumari.js')

const runSummarize = text => {
    return scriptResumen(text)
}


module.exports = {


    runSummarize
}