import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Empleado } from '../empleado.model'
import { ServicioEmpleados } from '../servicio-empleados'

@Component({
  selector: 'app-proyectos-component',
  standalone: false,
  templateUrl: './proyectos-component.html',
  styleUrl: './proyectos-component.css'
})
export class ProyectosComponent {
  constructor (private router: Router, private inyectarEmpleado: ServicioEmpleados) {

  }

  empleados: Empleado[] = []

  ngOnInit (): void {
    this.empleados = this.inyectarEmpleado.empleados
  }

  volverHome () {
    this.router.navigate([''])
  }

  registrarUsuario () {
    const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)
    // Habría que poner en el constructor: private miServicio: ServicioMostrarEmpleados
    // this.miServicio.muestraMensaje(`Nombre de mi empleado: ${miEmpleado.nombre}`)
    this.inyectarEmpleado.agregarEmpleadoServicio(miEmpleado)

    this.volverHome()
  }

  cuadroNombre: string = ''
  cuadroApellido: string = ''
  cuadroCargo: string = ''
  cuadroSueldo: number = 0
}
