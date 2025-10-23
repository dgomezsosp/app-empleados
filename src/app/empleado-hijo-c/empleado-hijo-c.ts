import { Component, Input } from '@angular/core'
import { Empleado } from '../empleado.model'
import { ServicioEmpleados } from '../servicio-empleados'

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: false,
  templateUrl: './empleado-hijo-c.html',
  styleUrl: './empleado-hijo-c.css'
})
export class EmpleadoHijoC {
  @Input() empleados2: Empleado[] = []
  // Se inyecta el servicio creado servicio-empleados
  constructor (private miServicio: ServicioEmpleados) {

  }

  // Para pasar información del hijo al padre (caracteristicas-empleado-c a empleado-hijo-c)

  recibirCaracteristica (empleado: Empleado, nuevaCaracteristica: string) {
    this.miServicio.agregarEmpleadoServicio(empleado)
    // this.miServicio.muestraMensaje(nuevaCaracteristica)
    // empleado.caracteristicas.push(nuevaCaracteristica)
  }
}
