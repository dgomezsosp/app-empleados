import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Empleado } from './empleado.model'

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  constructor (private httpClient: HttpClient) {

  }

  guardarEmpleados (empleados: Empleado[]) {
    this.httpClient.put('https://mis-clientes-ef085-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe({
      next: (response) => console.log(`Se han guardado los empleado: ${response}`),
      error: (error) => console.log(`Hubo un error: ${error}`)
    })
  }

  cargarEmpleados () {
    return this.httpClient.get('https://mis-clientes-ef085-default-rtdb.europe-west1.firebasedatabase.app/datos.json')
  }

  actualizarEmpleado (indice: number, empleado: Empleado) {
    const url = `https://mis-clientes-ef085-default-rtdb.europe-west1.firebasedatabase.app/datos/${indice}.json`

    this.httpClient.put(url, empleado).subscribe({
      next: (response) => console.log(`Se ha modificado correctamente el empleado: ${response}`),
      error: (error) => console.log(`Hubo un error: ${error}`)
    })
  }
}
