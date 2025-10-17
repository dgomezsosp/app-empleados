import { Component, Input } from '@angular/core'
import { Empleado } from '../empleado.model'

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: false,
  templateUrl: './empleado-hijo-c.html',
  styleUrl: './empleado-hijo-c.css'
})
export class EmpleadoHijoC {
  @Input() empleados2: Empleado[] = []

  // Para pasar información del hijo al padre (caracteristicas-empleado-c a empleado-hijo-c)

  recibirCaracteristica (empleado: Empleado, nuevaCaracteristica: string) {
    empleado.caracteristicas.push(nuevaCaracteristica)
  }
}
