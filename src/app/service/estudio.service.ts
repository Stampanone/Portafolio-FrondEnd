import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../entidad/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url= "http://localhost:8080/estudio/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public delete(id:number): Observable<Estudio>{
    return this.httpClient.delete<Estudio>(this.url + `borrar/${id}`);
  }
  
  public save(estu:Estudio): Observable <any>{
    return this.httpClient.post<any>(this.url + 'crear', estu);
  } 

  public update(estu:Estudio): Observable <any>{
    return this.httpClient.put <any>(this.url + 'editar', estu);
  }

  public edit(id: number, estu:Estudio): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, estu);
  }
  public detail(id: number):Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `ver/${id}`);
    }
}
