import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../entidad/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  url= "https://web-production-a79e.up.railway.app/idioma/"
  constructor(private httpClient:HttpClient) { }
  
  public list(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.url + 'lista');
  }

  public delete(id:number): Observable<Idioma>{
    return this.httpClient.delete<Idioma>(this.url + `borrar/${id}`);
  }
  
  public save(idio:Idioma): Observable <any>{
    return this.httpClient.post<any>(this.url + 'crear', idio);
  } 

  public update(idio:Idioma): Observable <any>{
    return this.httpClient.put <any>(this.url + 'editar', idio);
  }

  public edit(id: number, idio:Idioma): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, idio);
  }
  public detail(id: number):Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.url + `ver/${id}`);
    }
}
