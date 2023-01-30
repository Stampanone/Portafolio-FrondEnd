import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-agre-idioma',
  templateUrl: './agre-idioma.component.html',
  styleUrls: ['./agre-idioma.component.css']
})
export class AgreIdiomaComponent implements OnInit {
  
  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private sIdio : IdiomaService, private router: Router) {

    this.form= this.fromBuilder.group({
      nombre:['',[Validators.required]],
      porcentajeDominado:['', [Validators.required]],
      
   })
   }

  ngOnInit(): void {
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get PorcentajeDominado(){
    return this.form.get("porcentajeDominado");
  }
  
  onCreate(): void{
    this.sIdio.save(this.form.value).subscribe(data=>{
      
        });
      } 

  onEnviar(event:Event){
        event.preventDefault;
        if(this.form.valid){
          //metodos
          this.onCreate();
          alert("Idioma o tecnologia Añadida"); 
      this.router.navigate(['idiomas']); 
        }else{
          alert("falló en la carga, intente nuevamente");
          this.form.markAllAsTouched();
        }
      } 

}
