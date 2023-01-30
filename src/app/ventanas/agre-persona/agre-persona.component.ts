import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-agre-persona',
  templateUrl: './agre-persona.component.html',
  styleUrls: ['./agre-persona.component.css']
})
export class AgrePersonaComponent implements OnInit {


  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private sPers : PersonaService, private router: Router) {
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.fromBuilder.group({
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
  onCreate(): void{
    this.sPers.save(this.form.value).subscribe(data=>{
      
        });
      } 

  onEnviar(event:Event){
        event.preventDefault;
        if(this.form.valid){
          //metodos
          this.onCreate();
          alert("Persona Añadida"); 
      this.router.navigate(['acerca']); 
        }else{
          alert("falló en la carga, intente nuevamente");
          this.form.markAllAsTouched();
        }
      } 


}


