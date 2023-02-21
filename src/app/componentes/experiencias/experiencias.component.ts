import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[]= [];
  isLogged= false;
  
  constructor(private servExperiencia: ExperienciaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void { 
    this.cargarExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
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
