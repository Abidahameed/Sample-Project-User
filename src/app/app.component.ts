import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myapp';
constructor(
  private http:HttpClient
){
  // http.post("http://localhost:5000/api/user/allusers", {}).subscribe(
  //   (res) => {}
  // );
}
}
