import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Myapp';
  registerObj: any = {
    
    "Name":"",
    "Email":"",
    "password":"",
   
    "phoneNumber":"",
  }

  registrationForm: FormGroup;
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
    

  constructor(private formBuilder: FormBuilder,private router: Router,private registerservice:RegisterService,private user:UserService) {


   



    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])(?=.*\d.*\d.*\d.*).*$/),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    });
  }


  get nameControl() {
    return this.registrationForm.get('name');
  }

  get emailControl() {
    return this.registrationForm.get('email');
  }

  get passwordControl() {
    return this.registrationForm.get('password');
  }

  get phoneControl() {
    return this.registrationForm.get('phone');
  }

  onRegister() {

this.registerservice.register(this.registerObj).subscribe((res:any)=>{
  if(res.result){
    alert("Successfully Registered")
  }
})

    if (this.registrationForm.valid) {
      // Handle form submission
      this.router.navigate(['/category']);

    }
  }
}
