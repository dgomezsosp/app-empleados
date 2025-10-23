import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing-module'
import { App } from './app'
import { FormsModule } from '@angular/forms'
import { EmpleadoHijoC } from './empleado-hijo-c/empleado-hijo-c'
import { CaracteristicasEmpleadoC } from './caracteristicas-empleado-c/caracteristicas-empleado-c'
import { ServicioMostrarEmpleados } from './servicio-mostrar-empleados'
import { ServicioEmpleados } from './servicio-empleados'
import { HomeComponent } from './home-component/home-component'
import { ProyectosComponent } from './proyectos-component/proyectos-component'
import { QuienesComponent } from './quienes-component/quienes-component'
import { ContactoComponent } from './contacto-component/contacto-component'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'contacto', component: ContactoComponent }
]
@NgModule({
  declarations: [
    App,
    EmpleadoHijoC,
    CaracteristicasEmpleadoC,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), ServicioMostrarEmpleados, ServicioEmpleados
  ],
  bootstrap: [App]
})
export class AppModule { }
