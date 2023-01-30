import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agre-expe',
  templateUrl: './agre-expe.component.html',
  styleUrls: ['./agre-expe.component.css']
})
export class AgreExpeComponent implements OnInit {

  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private sExpe : ExperienciaService, private router: Router) {
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.fromBuilder.group({
      puesto:['',[Validators.required]],
      institucion:['', [Validators.required]],
      inicio:['',[Validators.required]],
      fin:['', [Validators.required]],
      descripcion:['', [Validators.required]],
   })
}
ngOnInit(): void {
}

  

  get Puesto(){
    return this.form.get("puesto");
  }
  get Institucion(){
    return this.form.get("institucion");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get Fin(){
    return this.form.get("fin");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }

  onCreate(): void{
    this.sExpe.save(this.form.value).subscribe(data=>{
      
        });
      } 

  onEnviar(event:Event){
        event.preventDefault;
        if(this.form.valid){
          //metodos
          this.onCreate();
          alert("Experiencia Añadida"); 
      this.router.navigate(['experiencias']); 
        }else{
          alert("falló en la carga, intente nuevamente");
          this.form.markAllAsTouched();
        }
      } 
}
