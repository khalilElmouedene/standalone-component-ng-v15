import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { type Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly _httpClient = inject(HttpClient);


  getTodos(): Observable<Array<any>> {
    return this._httpClient.get<Array<any>>("https://jsonplaceholder.typicode.com/todos");
  }
}
