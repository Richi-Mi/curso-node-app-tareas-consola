require('colors')
const inquirer = require('inquirer')

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas `
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir \n`
            }
        ]
    }
]

const inquireMenu = async () => {
    console.clear()

    console.log(`
    =================================
    ====== Selecione una opcion =====
    =================================
    `.green)

    const { opcion } = await inquirer.prompt(menuOpts)

    return opcion
}
const opts = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar `,
        choices: ['ENTER']
    }
]
const pausaEnter = async () => {
    console.log('\n')
    await inquirer.prompt(opts)
}
const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate ( value ) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            } 
        }
    ]
    const { desc } = await inquirer.prompt(question)
    return desc
}

module.exports = {
    inquireMenu,
    pausaEnter,
    leerInput
}