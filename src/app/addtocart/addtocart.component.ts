// addtocart.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  products_Id: any;
  quantity: number = 1;
  CartItems: any[] = [];
  userId: string = '';
  selectedProduct: any;
  cartData: any[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private user: UserService
  ) {
    this.products_Id = this.router.getCurrentNavigation()?.extras.state?.['data'];

    if (this.products_Id) {
      const newItem = { ...this.products_Id, quantity: this.quantity, totalprice: this.products_Id.price * this.quantity, price: this.products_Id.price };
      this.cartService.addToCart(newItem);
      this.CartItems.push(newItem);
    }
  }



  incrementQuantity(index: number): void {
    if (this.CartItems[index].quantity) {
      this.CartItems[index].quantity++;
      this.updateTotalPrice(index);
    }
  }

  decrementQuantity(index: number): void {
    if (this.CartItems[index].quantity > 1) {
      this.CartItems[index].quantity--;
      this.updateTotalPrice(index);
    }
  }

  updateTotalPrice(index: number): void {
    this.CartItems[index].totalprice = this.CartItems[index].products_Id.price * this.CartItems[index].quantity;
  }

  calculateSubtotal(): number {
    return this.CartItems.reduce((total, item) => total + item.totalprice, 0);
  }

  deleteProduct(index: number): void {
    const cartItem = this.CartItems[index];
  
    // Check if 'products_Id' is not null before accessing properties
    if (cartItem && cartItem.products_Id && cartItem.products_Id._id) {
      // Delete from frontend
      this.CartItems.splice(index, 1);
      console.log('successfully deleted from front');
  
      // Delete from backend
      const productId = cartItem.products_Id._id;
  
      if (productId) {
        this.cartService.deleteCartItem(cartItem.user_Id, productId)
          .subscribe(response => {
            console.log('Item deleted successfully from backend', response);
          }, error => {
            console.error('Error deleting item from backend', error);
  
            // If an error occurs, you might want to add the item back to the frontend array
            // this.CartItems.splice(index, 0, deletedItem);
          });
      } else {
        console.error('Invalid product ID in cart item');
      }
    } else {
      console.error('Invalid cart item or missing products_Id property');
    }
  }
  
  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

  buyNow(): void {
    if (!this.selectedProduct) {
      console.log('No selected product');
      return;
    }

    const { user_Id, _id, quantity, totalprice } = this.selectedProduct;
    const productId = _id;

    // Calculate subtotal based on quantity and totalprice
    const subtotal = quantity * totalprice;

    const modifiedPayload = {
      quantity: quantity,
      subtotal: subtotal
    };

    this.cartService.placeOrder(user_Id, productId, modifiedPayload).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        this.clearSelectedProduct();
        this.router.navigate(['/buynow']);
      },
      (error) => {
        console.error('Error placing order:', error);
      }
    );
  }



  clearSelectedProduct(): void {
    this.selectedProduct = null;
    console.log('Cleared selected product');
  }


  ngOnInit(): void {
    const products_Id = {
      userId: this.user,
    };

    this.userId = this.user.getUserId();
    console.log('User ID in view form:', this.userId);

    this.cartService.getCartItems(products_Id).subscribe(
      (response: any) => {
        console.log('Cart Items:', response);
        this.CartItems = response.CartItems;
      },
      (error: any) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  loadcartData() {
    this.cartData = this.cartService.getCart();
  }

  cartValue: number = 0;

  incrementCartValue() {
    this.cartValue++;
  }
}
