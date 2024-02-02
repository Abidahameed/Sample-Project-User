import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ViewpageComponent } from '../viewpage/viewpage.component';
import { PantsService } from '../pants.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pantcollection',
  templateUrl: './pantcollection.component.html',
  styleUrls: ['./pantcollection.component.css']
})
export class PantcollectionComponent {
  productList: any[] = [];
  constructor(public dialog: MatDialog,private pantservice:PantsService,private user:UserService) {
    this.productList = [];
  }
 
  ngOnInit(): void {
    this.pantservice.productList().subscribe(
      (result: any) => {
        if (result) {
   
          this.productList = result.MyData.filter((data: any) => data.category === 'pant');
          console.log('pant:', this.productList);
          this.productList.forEach(item => console.log('Image:', item.image));
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
  openDialog(top: any): void {
    const dialogRef = this.dialog.open(ViewpageComponent, {
      data: top
    });
  }
  // private loadPants(): void {
  //   this.pantservice.getPants().subscribe(
  //     (data: any[]) => {
  //       this.pants = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching pants from the backend', error);
  //     }
  //   );
  // }
}
