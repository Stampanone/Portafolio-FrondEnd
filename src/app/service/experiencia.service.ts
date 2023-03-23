import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidad/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= "https://web-production-a79e.up.railway.app/experiencia/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public delete(id:number): Observable<Experiencia>{
    return this.httpClient.delete<Experiencia>(this.url + `borrar/${id}`);
  }
  
  public save(expe:Experiencia): Observable <any>{
    return this.httpClient.post<any>(this.url + 'crear', expe);
  } 

  public update(experiencia:Experiencia): Observable <any>{
    return this.httpClient.put <any>(this.url + 'editar', experiencia);
  }

  public edit(id: number, experiencia:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, experiencia);
  }
  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
    } 

}
