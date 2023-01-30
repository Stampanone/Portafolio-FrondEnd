import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/entidad/estudio';

import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  //estudios: any = [];  asi para traer excucivamente un array

  //para traer cualquier tipo de dato: estudios: any;
  estudios: Estudio[]=[];

  constructor(private servEstu: EstudioService) { }

  ngOnInit(): void { 
    this.cargarEstudio();
   }

  cargarEstudio(): void{
    this.servEstu.list().subscribe (data => {this.estudios=data});
  }

  delete(id:number){
    if(id != undefined){
      this.servEstu.delete(id).subscribe(
        data =>{
          alert("no se pudo eliminar la experiencia")
        }, error =>{
          
          alert("Experiencia eliminada correctamente")
          this.cargarEstudio();
        })
    }} 

}
