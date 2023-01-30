import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidad/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url= "http://localhost:8080/persona/"
  
  constructor(private httpClient:HttpClient) { }
  
  public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public delete(id:number): Observable<Persona>{
    return this.httpClient.delete<Persona>(this.url + `borrar/${id}`);
  }
  
  public save(pers:Persona): Observable <any>{
    return this.httpClient.post<any>(this.url + 'crear', pers);
  } 

  public update(pers:Persona): Observable <any>{
    return this.httpClient.put <any>(this.url + 'editar', pers);
  }

  public edit(id: number, pers:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, pers);
  }
  public detail(id: number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
    }
}
