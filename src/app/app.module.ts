import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProyectoComponent } from './proyectos/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { DetalleProyectoComponent } from './proyectos/detalle-proyecto/detalle-proyecto.component';
import { CrearAsignacionComponent } from './asignaciones/crear-asignacion/crear-asignacion.component';
import { EditarAsignacionComponent } from './asignaciones/editar-asignacion/editar-asignacion.component';
import { DetalleAsignacionComponent } from './asignaciones/detalle-asignacion/detalle-asignacion.component';
import { CrearIndicadorComponent } from './kpis/crear-indicador/crear-indicador.component';
import { EditarIndicadorComponent } from './kpis/editar-indicador/editar-indicador.component';
import { VisualizadorBarrasComponent } from './kpis/visualizador-barras/visualizador-barras.component';
import { AdministradorComponent } from './kpis/administrador/administrador.component';
import { CalendarioComponent } from './ausencias/calendario/calendario.component';
import { SolicitudComponent } from './ausencias/solicitud/solicitud.component';
import { DetalleComponent } from './ausencias/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    DetalleProyectoComponent,
    CrearAsignacionComponent,
    EditarAsignacionComponent,
    DetalleAsignacionComponent,
    CrearIndicadorComponent,
    EditarIndicadorComponent,
    VisualizadorBarrasComponent,
    AdministradorComponent,
    CalendarioComponent,
    SolicitudComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
