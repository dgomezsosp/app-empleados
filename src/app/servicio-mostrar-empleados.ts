import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ServicioMostrarEmpleados {
  muestraMensaje (mensaje: string) {
    alert(mensaje)
  }
}
