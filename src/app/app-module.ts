import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing-module'
import { App } from './app'
import { FormsModule } from '@angular/forms'
import { EmpleadoHijoC } from './empleado-hijo-c/empleado-hijo-c';
import { CaracteristicasEmpleadoC } from './caracteristicas-empleado-c/caracteristicas-empleado-c'

@NgModule({
  declarations: [
    App,
    EmpleadoHijoC,
    CaracteristicasEmpleadoC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
