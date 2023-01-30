import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudio } from 'src/app/entidad/estudio';
import { EstudioService } from 'src/app/service/estudio.service';


@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {
  form: FormGroup;
  estu: Estudio;
  constructor(private fromBuilder: FormBuilder, private sEstu : EstudioService, private router: Router, private activated: ActivatedRoute) { 
    this.form= this.fromBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      institucion:['', [Validators.required]],
      inicio:['',[Validators.required]],
      fin:['', [Validators.required]],
      descripcion:['', [Validators.required]],
   })
  }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.sEstu.detail(id).subscribe(data => {
      this.estu=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['experiencias']);
    }
    ) 
  }

  get Titulo(){
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
    this.sEstu.update(this.form.value).subscribe(data => {
     
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("Estudio modificada.");
      this.router.navigate(['estudio']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  } 

}
