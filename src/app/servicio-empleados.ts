import { Injectable } from '@angular/core'
import { Empleado } from './empleado.model'
import { ServicioMostrarEmpleados } from './servicio-mostrar-empleados'

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleados {
  constructor (private mostrarMensaje: ServicioMostrarEmpleados) {

  }

  empleados: Empleado[] = [
    new Empleado('David', 'Gómez', 'programador', 3000),
    new Empleado('Juan', 'Gómez', 'programador', 4000),
    new Empleado('Pepe', 'Gómez', 'programador', 5000)
  ]

  agregarEmpleadoServicio (empleado: Empleado) {
    this.mostrarMensaje.muestraMensaje(`El nombre del empleado es: ${empleado.nombre} (ServicioMostrarEmpleados dentro de ServicioEmpleados)`)
    this.empleados.push(empleado)
  }
}
