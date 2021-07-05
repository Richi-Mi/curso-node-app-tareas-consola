// const { mostrarMenu, pausa } = require('./helpers/mensajes')
require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquireMenu, pausaEnter, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

const main = async () => {

    let answer = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB) {
        //Establecer Tareas
    }
    
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

        // guardarDB(tareas.Listado)
        await pausaEnter()

    } while (answer !== '0');

    // pausa()
}
main()