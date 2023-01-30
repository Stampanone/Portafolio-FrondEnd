import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { IdiomaComponent } from './componentes/idioma/idioma.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AgreEstudioComponent } from './ventanas/agre-estudio/agre-estudio.component';
import { AgreExpeComponent } from './ventanas/agre-expe/agre-expe.component';
import { AgreIdiomaComponent } from './ventanas/agre-idioma/agre-idioma.component';
import { AgreProyectoComponent } from './ventanas/agre-proyecto/agre-proyecto.component';
import { EditEstudioComponent } from './ventanas/edit-estudio/edit-estudio.component';
import { EditExpeComponent } from './ventanas/edit-expe/edit-expe.component';
import { EditIdiomaComponent } from './ventanas/edit-idioma/edit-idioma.component';
import { EditPersonaComponent } from './ventanas/edit-persona/edit-persona.component';
import { EditProyectoComponent } from './ventanas/edit-proyecto/edit-proyecto.component';

const routes: Routes = [
  {path:'', component: InformacionComponent},
  {path:'acerca-de', component: InformacionComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'experiencias',component:ExperienciasComponent},
  {path:'aptitudes', component:AptitudesComponent},
  {path:'idiomas',component:IdiomaComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'login',component:LoginComponent},
  {path:'experiencias/agreexpe',component:AgreExpeComponent},
  {path:'experiencias/editexpe/:id',component:EditExpeComponent},
  {path:'acerca-de/editpersona/:id',component:EditPersonaComponent},
  {path:'estudios/agreestudio',component:AgreEstudioComponent},
  {path:'estudios/editestudio/:id',component:EditEstudioComponent},
  {path:'idiomas/agreidioma',component:AgreIdiomaComponent},
  {path:'idiomas/editidioma/:id',component:EditIdiomaComponent},
  {path:'proyectos/agreproyecto',component:AgreProyectoComponent},
  {path:'proyectos/editproyecto/:id',component:EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
