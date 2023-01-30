import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  form: FormGroup;
  proyec: Proyecto;

  constructor(private fromBuilder: FormBuilder, private sProyec: ProyectoService, private router: Router, private activated: ActivatedRoute) {

    this.form= this.fromBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      urlFoto:['',[Validators.required]],
      
   })
   }

  ngOnInit(): void {

    const id = this.activated.snapshot.params['id'];
    this.sProyec.detail(id).subscribe(data => {
      this.proyec=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['proyectos']);
    }
    ) 
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get UrlFoto(){
    return this.form.get("urlFoto");
  }

  onUpdate():void{
    this.sProyec.update(this.form.value).subscribe(data => {
     
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("Proyecto modificado.");
      this.router.navigate(['proyectos']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
