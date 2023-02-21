import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/entidad/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  //estudios: any = [];  asi para traer excucivamente un array

  //para traer cualquier tipo de dato: estudios: any;
  estudios: Estudio[]=[];
  //para mostrar los bostones de edicion solo cuando se esta logueado
  isLogged= false;

  constructor(private servEstu: EstudioService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void { 
    this.cargarEstudio();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
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
