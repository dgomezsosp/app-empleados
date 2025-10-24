import { Component } from '@angular/core'
import { Empleado } from '../empleado.model'
import { ActivatedRoute, Router } from '@angular/router'
import { ServicioEmpleados } from '../servicio-empleados'

@Component({
  selector: 'app-actualiza-component',
  standalone: false,
  templateUrl: './actualiza-component.html',
  styleUrl: './actualiza-component.css'
})
export class ActualizaComponent {
  constructor (private router: Router, private inyectarEmpleado: ServicioEmpleados, private route: ActivatedRoute) {

  }

  empleados: Empleado[] = []

  accion: number

  ngOnInit (): void {
    this.empleados = this.inyectarEmpleado.empleados

    this.indice = this.route.snapshot.params['id']

    const empleado: Empleado = this.inyectarEmpleado.encontrarEmpleado(this.indice)

    this.cuadroNombre = empleado.nombre
    this.cuadroApellido = empleado.apellido
    this.cuadroCargo = empleado.cargo
    this.cuadroSueldo = empleado.sueldo

    this.accion = parseInt(this.route.snapshot.queryParams['action'])
  }

  cuadroNombre: string = ''
  cuadroApellido: string = ''
  cuadroCargo: string = ''
  cuadroSueldo: number = 0

  indice: number

  volverHome () {
    this.router.navigate([''])
  }

  // actualizarUsuario () {
  //   const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)
  //   this.inyectarEmpleado.actualizarEmpleado(this.indice, miEmpleado)

  //   this.volverHome()
  // }

  // eliminarUsuario () {
  //   const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)
  //   this.inyectarEmpleado.eliminarEmpleado(this.indice, miEmpleado)

  //   this.volverHome()
  // }

  actualizarUsuario () {
    if (this.accion === 1) {
      const miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo)
      this.inyectarEmpleado.actualizarEmpleado(this.indice, miEmpleado)
    } else {
      this.inyectarEmpleado.eliminarEmpleado(this.indice)
    }

    this.volverHome()
  }
}
