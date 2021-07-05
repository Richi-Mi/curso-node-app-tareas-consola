require('colors')
const Tarea = require("./tarea")

class Tareas {

    constructor() {
        this._listado = {}
    }

    cargarTareasListado() {
        console.log('')

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
    listarPendientesCompletadas(completadas) {
        console.log('')

        this.Listado.forEach( ( tarea, idx ) => {
            let i = `${idx + 1}`.green
            let { completadoEn, descripcion } = tarea

            let estado 
            if(completadas) {
                estado = '05/07/2021'.green
                if(completadoEn !== null) {
                    console.log(`${i} .- ${descripcion} :: ${estado}`)
                } 
            }
            else {
                estado = 'Pendiente'.red
                if(completadoEn === null) {
                    console.log(`${i} .- ${descripcion} :: ${estado}`)
                }
            }
        } )
    }

    borrarTarea( id ) {
        if(this._listado[id]) {
            delete this._listado[id]
        }
    }

    toggleCompletadas( ids ) {

        ids.forEach( id => {

            const tarea = this._listado[id]
            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })
        
        this.Listado.forEach( tarea => {
            if(!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null
            }
        })
    }
}

module.exports = Tareas