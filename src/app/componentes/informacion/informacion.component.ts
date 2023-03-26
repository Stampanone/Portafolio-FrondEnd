import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidad/persona';
import { DatosService } from 'src/app/service/datos.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  acerca: string = "";
  Persona: any;
  isLogged= false;
  
  
  constructor(private servPers: PersonaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  cargarPersona():void{
    this.servPers.list().subscribe (data => {this.Persona=data});
  }
}
