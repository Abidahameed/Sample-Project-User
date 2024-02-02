import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeeansService {
 

  constructor(private http: HttpClient) {}

  getJeeans(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/api/products/filter');
  }
  productList(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:5000/api/products');
  }

}
