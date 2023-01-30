import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  persona: any;

  constructor(private servPers: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  cargarPersona():void{
    this.servPers.list().subscribe (data => {this.persona=data});
  }

}
