/** _listado: 
 * { 'uuid-1234567-123456-2: { id: 12, desc: Tarea 1, completadoEn: fecha } }
 * 
 */
require('colors')
const Tarea = require("./tarea")

class Tareas {
    constructor() {
        this._listado = {}
    }
    cargarTareasListado() {
        //1: en verde
        //Completada: Verde
        //Pendiente: Rojo
        //1. TareaDesc :: Completada || Pendiente
        this.Listado.forEach( (tarea, idx) => {
            let i = `${idx + 1}`.green
            const { descripcion, completadoEn} = tarea
            let estado 
            if(completadoEn === null) {
                estado = 'Pendiente'.red
            } 
            else {
                estado = 'Completada'.green
            }
            console.log(`${i} .- ${descripcion} :: ${estado}`)
        } )
        
    }
    cargarTareasFromArray (tareas) {
        tareas.forEach( (tarea) => {
            this._listado[tarea.id] = tarea
        })
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