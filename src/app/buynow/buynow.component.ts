import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {


  constructor(
   
    // public dialogRef: MatDialogRef<BuynowComponent>,
    private router: Router,
  ) {}

  //closeView() {
    // this.dialogRef.close();
  //}


  navigateToHome() {
    console.log('Button clicked');
    this.router.navigate(['/home']);
  }
}
