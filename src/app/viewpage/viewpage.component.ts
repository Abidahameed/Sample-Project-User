import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent {
  quantity: number = 1;
  userId: string = '';

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewpageComponent>,
    private router: Router,
    private cartService: CartService,
    private user:UserService,
  ) {
   
  }

  // setUserId(userId: string): void {
    
  //       this.userId = userId;
  //       console.log('User ID set:', this.userId);
  //     }
    
  ngOnInit(): void {
  
    this.userId = this.user.getUserId();
    console.log('User ID in view form:', this.userId);
  }


  closeView() {
    this.dialogRef.close();
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCartAndCloseView() {


    const productData = {
      // imageUrl: this.data.image,
      // name: this.data.Name,
      // quantity: this.quantity,
      // price: this.data.price,
      userId: this.userId,
      productId: this.data._id,  
    };

    this.dialogRef.close();

    if (productData) {
      // this.data.quantity = this.quantity;
     
      // console.warn(this.data);

      this.cartService.addToBackendCart(productData).subscribe(
        (response) => {
          console.log('Item added to backend cart successfully:', response);
        },
        (error) => {
          console.error('Error adding item to backend cart:', error);
        }
      );
    }
  }
}
