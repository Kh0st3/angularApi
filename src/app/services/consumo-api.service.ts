import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private readonly apiUrl = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {}

  getListaComentarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getComentario(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  editarComentario(id: number, comentario: any): Observable<void> {
    return this.http.put<void>(this.apiUrl + '/' + id, comentario);
  }

}
