import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {
  form: FormGroup;
  expe: Experiencia;

  constructor(private fromBuilder: FormBuilder, private sExpe : ExperienciaService, private router: Router, private activated: ActivatedRoute) { 
    this.form= this.fromBuilder.group({
      id:[''],
      puesto:['',[Validators.required]],
      institucion:['', [Validators.required]],
      inicio:['',[Validators.required]],
      fin:['', [Validators.required]],
      descripcion:['', [Validators.required]],
   })
  }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.sExpe.detail(id).subscribe(data => {
      this.expe=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['experiencias']);
    }
    ) 
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

  onUpdate():void{
    this.sExpe.update(this.form.value).subscribe(data => {
     
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("Experiencia modificada.");
      this.router.navigate(['experiencias']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  } 

}
