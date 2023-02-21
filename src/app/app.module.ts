import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { IdiomaComponent } from './componentes/idioma/idioma.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgreExpeComponent } from './ventanas/agre-expe/agre-expe.component';
import { EditExpeComponent } from './ventanas/edit-expe/edit-expe.component';
import { AgrePersonaComponent } from './ventanas/agre-persona/agre-persona.component';
import { EditPersonaComponent } from './ventanas/edit-persona/edit-persona.component';
import { EditEstudioComponent } from './ventanas/edit-estudio/edit-estudio.component';
import { AgreEstudioComponent } from './ventanas/agre-estudio/agre-estudio.component';
import { AgreIdiomaComponent } from './ventanas/agre-idioma/agre-idioma.component';
import { EditIdiomaComponent } from './ventanas/edit-idioma/edit-idioma.component';
import { AgreProyectoComponent } from './ventanas/agre-proyecto/agre-proyecto.component';
import { EditProyectoComponent } from './ventanas/edit-proyecto/edit-proyecto.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { interceptorProvider } from './service/interceptor-service';



@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    PortadaComponent,
    InformacionComponent,
    EstudiosComponent,
    ExperienciasComponent,
    AptitudesComponent,
    IdiomaComponent,
    ProyectosComponent,
    NavegacionComponent,
    LoginComponent,
    AgreExpeComponent,
    EditExpeComponent,
    AgrePersonaComponent,
    EditPersonaComponent,
    EditEstudioComponent,
    AgreEstudioComponent,
    AgreIdiomaComponent,
    EditIdiomaComponent,
    AgreProyectoComponent,
    EditProyectoComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
