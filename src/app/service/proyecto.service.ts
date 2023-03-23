import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidad/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url= "https://web-production-a79e.up.railway.app/proyecto/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public delete(id:number): Observable<Proyecto>{
    return this.httpClient.delete<Proyecto>(this.url + `borrar/${id}`);
  }
  
  public save(proyec:Proyecto): Observable <any>{
    return this.httpClient.post<any>(this.url + 'crear', proyec);
  } 

  public update(proyec:Proyecto): Observable <any>{
    return this.httpClient.put <any>(this.url + 'editar', proyec);
  }

  public edit(id: number, proyec:Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, proyec);
  }
  public detail(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
    }
}
