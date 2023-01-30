import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/entidad/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  form: FormGroup;
  pers: Persona;

  constructor(private fromBuilder: FormBuilder, private sPers : PersonaService, private router: Router, private activated: ActivatedRoute) { 
    this.form= this.fromBuilder.group({
      id:['',[Validators.required]],
      apellido:['',[Validators.required]],
      nombre:['', [Validators.required]],
      domicilio:['',[Validators.required]],
      fechaNacimiento:['', [Validators.required]],
      telefono:['', [Validators.required]],
      mail:['', [Validators.required]],
      sobreMi:['', [Validators.required]],
      fotoPerfilUrl:['', [Validators.required]],
      fotoPortada:['', [Validators.required]],
   })
  }
  
  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.sPers.detail(id).subscribe(data => {
      this.pers=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['acerca-de']);
    }
    ) 
  }

  get Apellido(){
    return this.form.get("apellido");
  }
  get Nombre(){
    return this.form.get("institucion");
  }
  get Domicilio(){
    return this.form.get("domicilio");
  }
  get FechaNacimiento(){
    return this.form.get("fechaNacimiento");
  }
  get Telefono(){
    return this.form.get("telefono");
  }
  get Mail(){
    return this.form.get("mail");
  }
  get SobreMi(){
    return this.form.get("sobreMi");
  }
  get FotoPerfilUrl(){
    return this.form.get("fotoPerfilUrl");
  }
  get FotoPortada(){
    return this.form.get("fotoPortada");
  }

  onUpdate():void{
    this.sPers.update(this.form.value).subscribe(data => {
     
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("Persona modificada.");
      this.router.navigate(['acerca-de']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
