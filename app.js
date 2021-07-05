// const { mostrarMenu, pausa } = require('./helpers/mensajes')

const { inquireMenu, pausa } = require('./helpers/inquirer')

require('colors')
console.clear()

const main = async () => {
    console.log('Main')
    let answer = ''
    do {
        answer = await inquireMenu()
        
        console.log({ answer })

        await pausa()
    } while (answer !== '0');

    // pausa()
}
main()