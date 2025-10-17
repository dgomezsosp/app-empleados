import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CaracteristicasEmpleadoC } from './caracteristicas-empleado-c'

describe('CaracteristicasEmpleadoC', () => {
  let component: CaracteristicasEmpleadoC
  let fixture: ComponentFixture<CaracteristicasEmpleadoC>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaracteristicasEmpleadoC]
    })
      .compileComponents()

    fixture = TestBed.createComponent(CaracteristicasEmpleadoC)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
