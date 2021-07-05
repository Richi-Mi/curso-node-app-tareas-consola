// const { mostrarMenu, pausa } = require('./helpers/mensajes')
require('colors')

const { inquireMenu, pausaEnter, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

const main = async () => {

    let answer = ''
    const tareas = new Tareas()
    
    do {

        //Imprimimimos el menu, y esperamos la respuesta de las opciones
        answer = await inquireMenu()

        switch(answer) {
            case '1':
                //Crear Opcion
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc)
            break;
            case '2':
                //Listar Tareas
                console.log(tareas.Listado)
            break;

        }

        await pausaEnter()
        console.log(answer)

    } while (answer !== '0');

    // pausa()
}
main()