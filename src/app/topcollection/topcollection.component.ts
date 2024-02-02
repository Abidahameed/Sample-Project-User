import { Component, OnInit} from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ViewpageComponent } from '../viewpage/viewpage.component';
import { TopsService } from '../tops.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-topcollection',
  templateUrl: './topcollection.component.html',
  styleUrls: ['./topcollection.component.css']
})
export class TopcollectionComponent implements OnInit {
 productList: any[] = [];
 imageUrl ="file:///C:/sample%20project/controllers/public/";
  constructor(public dialog: MatDialog, private topsservice: TopsService,private user:UserService) {}
 ngOnInit(): void {

  this.topsservice.productList().subscribe(
    (result: any) => {
      if (result) {
 

        this.productList = result.MyData.filter((data: any) => data.category === 'top');
        console.log('top:',this.productList)
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
    console.log('top',top)
  }
  public previewImage(event:any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log('csv content', e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }


  // private loadTops(): void {
  //   this.topsservice.getTops().subscribe(
  //     (data: any[]) => {
  //       this.tops = data;
  //       debugger
  //       console.log('Fetched data:', this.tops);
  //     },
  //     (error) => {
  //       console.error('Error fetching tops from the backend', error);
  //     }
  //   );
  // }

}
