import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-agre-proyecto',
  templateUrl: './agre-proyecto.component.html',
  styleUrls: ['./agre-proyecto.component.css']
})
export class AgreProyectoComponent implements OnInit {

  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private sProyec : ProyectoService, private router: Router) {

    this.form= this.fromBuilder.group({
      nombre:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      urlFoto:['',[Validators.required]],
      
   })
   }

  ngOnInit(): void {
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

  onCreate(): void{
    this.sProyec.save(this.form.value).subscribe(data=>{
      
        });
      } 

  onEnviar(event:Event){
        event.preventDefault;
        if(this.form.valid){
          //metodos
          this.onCreate();
          alert("Proyecto Añadido"); 
      this.router.navigate(['proyectos']); 
        }else{
          alert("falló en la carga, intente nuevamente");
          this.form.markAllAsTouched();
        }
      } 

}
