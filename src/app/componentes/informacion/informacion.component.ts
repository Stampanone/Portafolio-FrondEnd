import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidad/persona';
import { DatosService } from 'src/app/service/datos.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  acerca: string = "";
  Persona: any;
  
  
  constructor(private servPers: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  cargarPersona():void{
    this.servPers.list().subscribe (data => {this.Persona=data});
  }
}
