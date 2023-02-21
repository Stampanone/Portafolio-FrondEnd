import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[]= [];
  isLogged= false;

  constructor(private servProyecto: ProyectoService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
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
