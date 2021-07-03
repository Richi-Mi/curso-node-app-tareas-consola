require('colors')

const mostrarMenu = () => {
    console.clear()

    return new Promise( resolve => {
        console.log(`
        =================================
        ====== Selecione una opcion =====
        =================================
        `.green)
    
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar Tareas `)
        console.log(`${'3.'.green} Listar Tareas Completadas`)
        console.log(`${'4.'.green} Listar Tareas Pendientes`)
        console.log(`${'5.'.green} Completar tarea`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir \n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Selecciona una opción: ', (answer) => {
            readline.close()
            resolve(answer)
        })
    })

}
const pausa = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presiona la tecla ${'ENTER'.green} para continuar`, (answer) => {
            readline.close()
            resolve()
        })
    } )
}
module.exports = {
    mostrarMenu,
    pausa
}