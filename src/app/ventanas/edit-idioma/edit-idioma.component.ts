import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Idioma } from 'src/app/entidad/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html',
  styleUrls: ['./edit-idioma.component.css']
})
export class EditIdiomaComponent implements OnInit {

  form: FormGroup;
  idio: Idioma;

  constructor(private fromBuilder: FormBuilder, private sIdio: IdiomaService, private router: Router, private activated: ActivatedRoute) { 

    this.form= this.fromBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      porcentajeDominado:['', [Validators.required]],
      
   })
  }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.sIdio.detail(id).subscribe(data => {
      this.idio=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['idiomas']);
    }
    ) 
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get PorcentajeDominado(){
    return this.form.get("porcentajeDominado");
  }
  
  onUpdate():void{
    this.sIdio.update(this.form.value).subscribe(data => {
     
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("Idioma o Tecnologia modificada.");
      this.router.navigate(['idiomas']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
