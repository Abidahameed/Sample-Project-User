import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ViewpageComponent } from '../viewpage/viewpage.component';
import { JeeansService } from '../jeeans.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jeeanscollection',
  templateUrl: './jeeanscollection.component.html',
  styleUrls: ['./jeeanscollection.component.css']
})
export class JeeanscollectionComponent {
  productList: any[] = [];
  constructor(public dialog: MatDialog,private jeans:JeeansService,private user:UserService) {

  }
  ngOnInit(): void {

    this.jeans.productList().subscribe(
      (result: any) => {
        if (result) {
      
          this.productList = result.MyData.filter((data: any) => data.category === 'jeans');
          console.log('jeans:',this.productList)
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openDialog(jean: any): void {
    const dialogRef = this.dialog.open(ViewpageComponent, {
      data: jean
    });
  }

  // private loadJeeans(): void {
  //   this.jeans.getJeeans().subscribe(
  //     (data: any[]) => {
  //       this.jeeans = data;
  //       debugger
  //       console.log('Fetched data:', this.jeeans);
  //     },
  //     (error) => {
  //       console.error('Error fetching jeans from the backend', error);
  //     }
  //   );
  // }


}
