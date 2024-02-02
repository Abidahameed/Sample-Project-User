import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {


// private url:string

  constructor(
    private http: HttpClient) { 

    }
 register(obj:any): Observable<any[]> {
 
    return this.http.post<any>("http://localhost:5000/api/user/",obj);
  }

}