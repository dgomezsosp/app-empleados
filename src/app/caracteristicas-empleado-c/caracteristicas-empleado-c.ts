import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: false,
  templateUrl: './caracteristicas-empleado-c.html',
  styleUrl: './caracteristicas-empleado-c.css'
})
export class CaracteristicasEmpleadoC {
  @Output() caracteristicasEmpleados = new EventEmitter<string>()

  enviarCaracteristica (value: string) {
    this.caracteristicasEmpleados.emit(value)
  }
}
