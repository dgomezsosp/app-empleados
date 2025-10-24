import { Injectable } from '@angular/core'
import { Empleado } from './empleado.model'
import { ServicioMostrarEmpleados } from './servicio-mostrar-empleados'
import { DataServices } from './data-services'

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleados {
  constructor (private mostrarMensaje: ServicioMostrarEmpleados, private dataService: DataServices) {

  }

  setEmpleados (misEmpleados: Empleado[]) {
    this.empleados = misEmpleados
  }

  empleados: Empleado[]
  // empleados: Empleado[] = [
  //   new Empleado('David', 'Gómez', 'programador', 3000),
  //   new Empleado('Juan', 'Gómez', 'programador', 4000),
  //   new Empleado('Pepe', 'Gómez', 'programador', 5000)
  // ]

  agregarEmpleadoServicio (empleado: Empleado) {
    this.mostrarMensaje.muestraMensaje(`El nombre del empleado es: ${empleado.nombre} (ServicioMostrarEmpleados dentro de ServicioEmpleados)`)
    this.empleados.push(empleado)

    this.dataService.guardarEmpleados(this.empleados)
  }

  encontrarEmpleado (indice: number) {
    const empleado: Empleado = this.empleados[indice]
    return empleado
  }

  actualizarEmpleado (indice: number, empleado: Empleado) {
    const empleadoModificado = this.empleados[indice]

    empleadoModificado.nombre = empleado.nombre
    empleadoModificado.apellido = empleado.apellido
    empleadoModificado.cargo = empleado.cargo
    empleadoModificado.sueldo = empleado.sueldo

    this.dataService.actualizarEmpleado(indice, empleadoModificado)
  }

  eliminarEmpleado (indice: number) {
    this.empleados.splice(indice, 1)
  }

  // Cargar información del servicio data services

  obtenerEmpleados () {
    return this.dataService.cargarEmpleados()
  }
}
