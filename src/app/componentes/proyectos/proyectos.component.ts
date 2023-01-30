import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[]= [];

  constructor(private servProyecto: ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto;
  }

  cargarProyecto(): void{
    this.servProyecto.list().subscribe (data => {this.proyecto=data});
  }

  delete(id:number){
    if(id != undefined){
      this.servProyecto.delete(id).subscribe(
        data =>{
          alert("no se pudo eliminar el proyecto")
        }, error =>{
          
          alert("Proyecto eliminado correctamente")
          this.cargarProyecto();
        })
    }}

}
