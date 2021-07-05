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
const listadoTareasBorrar = async (tareas) => {
    //map devuelve un arreglo con distintas keys pro misma informacion
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`
        }
    })
    choices.unshift({
        value: 0,
        name: '0'.green + '. Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas)
    return id
}
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question)
    return ok
}
const mostrarListadoCheckList = async (tareas) => {
    //map devuelve un arreglo con distintas keys pro misma informacion
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green

        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    })
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta)
    return ids
}
module.exports = {
    inquireMenu,
    pausaEnter,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}