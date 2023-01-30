import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[]= [];
  
  constructor(private servExperiencia: ExperienciaService) { }

  ngOnInit(): void { 
    this.cargarExperiencia();
   }

  cargarExperiencia(): void{
    this.servExperiencia.list().subscribe (data => {this.experiencias=data});
  }

  delete(id:number){
    if(id != undefined){
      this.servExperiencia.delete(id).subscribe(
        data =>{
          alert("no se pudo eliminar la experiencia")
        }, error =>{
          
          alert("Experiencia eliminada correctamente")
          this.cargarExperiencia();
        })
    }} 

}
