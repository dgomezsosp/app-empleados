import { TestBed } from '@angular/core/testing'

import { ServicioEmpleados } from './servicio-empleados'

describe('InyectarEmpleado', () => {
  let service: ServicioEmpleados

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ServicioEmpleados)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
