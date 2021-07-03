const { mostrarMenu, pausa } = require('./helpers/mensajes')

require('colors')
console.clear()

const main = async () => {
    console.log('Main')
    let answer = ''
    do {
        answer = await mostrarMenu()
        
        console.log({ answer })

        if(answer === '0') await pausa()
    } while (answer !== '0');

    // pausa()
}
main()