// top.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopcollectionComponent } from './topcollection/topcollection.component';

@Injectable({
  providedIn: 'root'
})
export class TopsService {
 

  constructor(private http: HttpClient) {}

  getTops(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/api/products/filter');
  }
  productList(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:5000/api/products');
  }
}
