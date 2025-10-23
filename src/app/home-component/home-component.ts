import { Component, signal } from '@angular/core'
import { Empleado } from '../empleado.model'
import { ServicioEmpleados } from '../servicio-empleados'

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  protected readonly title = signal('Registro de empleados')

  empleados: Empleado[] = []

  // Se inyecta el servicio creado servicio-empleados
  constructor (private inyectarEmpleado: ServicioEmpleados) {
    // this.empleados = this.inyectarEmpleado.empleados
  }

  ngOnInit (): void {
    this.empleados = this.inyectarEmpleado.empleados
  }

  registrarUsuario () {
    const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)
    // Habría que poner en el constructor: private miServicio: ServicioMostrarEmpleados
    // this.miServicio.muestraMensaje(`Nombre de mi empleado: ${miEmpleado.nombre}`)
    this.inyectarEmpleado.agregarEmpleadoServicio(miEmpleado)
  }

  cuadroNombre: string = ''
  cuadroApellido: string = ''
  cuadroCargo: string = ''
  cuadroSueldo: number = 0
}
