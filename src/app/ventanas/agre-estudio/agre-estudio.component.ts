import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-agre-estudio',
  templateUrl: './agre-estudio.component.html',
  styleUrls: ['./agre-estudio.component.css']
})
export class AgreEstudioComponent implements OnInit {
  
  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private sEstu : EstudioService, private router: Router) { 

    this.form= this.fromBuilder.group({
      titulo:['',[Validators.required]],
      institucion:['', [Validators.required]],
      inicio:['',[Validators.required]],
      fin:['', [Validators.required]],
      descripcion:['', [Validators.required]],
   })
  }

  ngOnInit(): void {
  }

  get Titulo(){
    return this.form.get("titulo");
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
    this.sEstu.save(this.form.value).subscribe(data=>{
      
        });
      } 

  onEnviar(event:Event){
        event.preventDefault;
        if(this.form.valid){
          //metodos
          this.onCreate();
          alert("Estudio Añadido"); 
      this.router.navigate(['estudios']); 
        }else{
          alert("falló en la carga, intente nuevamente");
          this.form.markAllAsTouched();
        }
      } 

}
