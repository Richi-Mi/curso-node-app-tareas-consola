// const { mostrarMenu, pausa } = require('./helpers/mensajes')
require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquireMenu, pausaEnter, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

const main = async () => {

    let answer = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB) {
        //Establecer Tareas
        tareas.cargarTareasFromArray(tareasDB)
    }
    
    do {

        //Imprimimimos el menu, y esperamos la respuesta de las opciones
        answer = await inquireMenu()

        switch(answer) {
            case '1':
                //Crear Opcion
                const desc = await leerInput('Descripción:')
                tareas.crearTarea(desc)
            break;

            case '2':
                //Listar Tareas
                tareas.cargarTareasListado()
            break;
            
            case '3':
                tareas.listarPendientesCompletadas(true)
            break;

            case '4':
                tareas.listarPendientesCompletadas(false)
            break;
            case '5': //Completado o Pendiente
                const ids = await mostrarListadoCheckList(tareas.Listado)
                tareas.toggleCompletadas(ids)
                console.log(ids)
            break;
            case '6':
                const id = await listadoTareasBorrar( tareas.Listado)
                if(id !== 0) {
                    const ok = await confirmar('¿Estas seguro?')

                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log('Tarea Borrada Correctamente'.red)
                    }
                }
            break;
        }

        guardarDB(tareas.Listado)

        await pausaEnter()

    } while (answer !== '0');

    // pausa()
}
main()