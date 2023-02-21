import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/entidad/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  idioma: Idioma[]=[];
  isLogged= false;

  constructor(private servIdioma: IdiomaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarIdioma();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  cargarIdioma(): void{
    this.servIdioma.list().subscribe (data => {this.idioma=data});
  }

  delete(id:number){
    if(id != undefined){
      this.servIdioma.delete(id).subscribe(
        data =>{
          alert("no se pudo eliminar")
        }, error =>{
          
          alert("idioma o tecnologia eliminados correctamente")
          this.cargarIdioma();
        })
    }}

}
