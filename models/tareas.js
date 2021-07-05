/** _listado: 
 * { 'uuid-1234567-123456-2: { id: 12, desc: Tarea 1, completadoEn: fecha } }
 * 
 */

const Tarea = require("./tarea")

class Tareas {
    constructor() {
        this._listado = {}
    }
    cargarTareas(tareas) {
        
    }
    crearTarea(desc) {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    get Listado() {
        const listado = []
        //Obtiene todos los valores del objeto(keys) y devuelve un arreglo
        const keys = Object.keys(this._listado)
        
        keys.forEach( key => {
            const tarea = this._listado[key]
            listado.push( tarea )
        })

        return listado
    }
}
module.exports = Tareas