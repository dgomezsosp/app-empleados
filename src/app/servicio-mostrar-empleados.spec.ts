import { TestBed } from '@angular/core/testing'

import { ServicioMostrarEmpleados } from './servicio-mostrar-empleados'

describe('ServicioEmpleados', () => {
  let service: ServicioMostrarEmpleados

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ServicioMostrarEmpleados)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
