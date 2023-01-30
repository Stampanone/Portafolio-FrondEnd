//hacer peticiones y CRUD
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba repuesta asincronica
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor(private http:HttpClient) { }
  //metodo observable que devuelve datos
  getDatos(): Observable<any>{
    //retorno de datos usando el metodo get en HttpClient que llama a la base de datos JSON o una url
    return this.http.get('./assets/db/db.json');
    //aca podria poner una callback para ver la opcion de problema de coneccion al servidor
  }
}
