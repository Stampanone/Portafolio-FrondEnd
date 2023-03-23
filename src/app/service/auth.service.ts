import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../entidad/jwt-dto';
import { LoginUsuario } from '../entidad/login-usuario';
import { NuevoUsuario } from '../entidad/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl= 'https://web-production-a79e.up.railway.app/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
  }
}
