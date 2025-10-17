import { Component, signal } from '@angular/core'
import { Empleado } from './empleado.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Registro de empleados')

  empleados: Empleado[] = [
    new Empleado('David', 'Gómez', 'programador', 3000),
    new Empleado('Juan', 'Gómez', 'programador', 4000),
    new Empleado('Pepe', 'Gómez', 'programador', 5000)
  ]

  registrarUsuario () {
    const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)

    this.empleados.push(miEmpleado)
  }

  cuadroNombre: string = ''
  cuadroApellido: string = ''
  cuadroCargo: string = ''
  cuadroSueldo: number = 0
}
