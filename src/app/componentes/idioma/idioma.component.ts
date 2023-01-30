import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/entidad/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  idioma: Idioma[]=[];

  constructor(private servIdioma: IdiomaService) { }

  ngOnInit(): void {
    this.cargarIdioma();
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
