import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  errorMessage: string = '';
  

  constructor(private formBuilder: FormBuilder, private router: Router, private loginservice: LoginService,private user:UserService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])(?=.*\d.*\d.*\d.*).*$/),
        ],
      ],
    });
  }

  login(data: object): void 
{
//  console.log(this.user.setUserId(userId));

console.log(data)
    this.loginservice.userlogin(data).subscribe(
      (result: any) => {

        if (result) {
          this.user.setUserId(result.MyData._id);
          this.router.navigate(['/category']);
        } else {
          
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = 'Invalid credentials. Please check your email and password.';

        // Handle error (show error message, etc.)
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  get passwordControl() {
    return this.loginForm.get('password');
  }

  get emailControl() {
    return this.loginForm.get('Email');
  }
  // login(data:object):void{
   
  //   this.loginservice.userlogin(data).subscribe((result)=>{
  //     console.warn(result)
  //   });
  //   if (this.loginForm.valid) {
  //     // Handle form submission
  //     this.router.navigate(['/category']);
  //   }
  // }
 
}
