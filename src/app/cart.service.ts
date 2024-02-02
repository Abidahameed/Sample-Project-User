// cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';
  private apiUrl = 'http://localhost:5000/api/cart/';

  constructor(private http: HttpClient) {}

  getCart(): any[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  addToCart(item: any): void {
    const cart = this.getCart();
    cart.push(item);
    this.updateLocalStorage(cart);
  }

  removeFromCart(index: number): void {
    const cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      this.updateLocalStorage(cart);
    }
  }

  updateLocalStorage(cart: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  buyNow(productData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/orders/', productData);
  }

  addToBackendCart(productData: any): Observable<any> {
    const params = new HttpParams()
      .set('user_Id', productData.userId)
      .set('products_Id', productData.productId);

    return this.http.post<any>(`http://localhost:5000/api/cart/?${params.toString()}`, {});
  }

  getCartItems(productData: any): Observable<any> {
    const params = new HttpParams().set('user_Id', productData.userId.userId);
    const url = `http://localhost:5000/api/cart/viewcart?${params}`;
    return this.http.get<any>(url, { params });
  }

  // placeOrder(product: any): Observable<any> {
  //   return this.http.post<any>('http://localhost:5000/api/orders/', product);
  // }

  placeOrder(user_Id: string, products_Id: string, modifiedPayload: any): Observable<any> {
    return this.http.post<any>(`http://localhost:5000/api/orders/?user_Id=${user_Id}&products_Id=${products_Id}`, modifiedPayload);
  }
  


  deleteCartItem(user_Id: string, products_Id: string | { _id: string }): Observable<any> {
    const productId = typeof products_Id === 'object' ? products_Id._id : products_Id;
    const url = `http://localhost:5000/api/cart/deletecartitem?user_Id=${user_Id}&products_Id=${productId}`;
    return this.http.delete<any>(url);
  }
  
  incrementQuantity(user_Id: string, productId: string): Observable<any> {
    const url = `http://localhost:5000/api/cart/incrmnt?user_Id=${user_Id}&products_Id=${productId}`;
    const payload = { user_Id, productId };
    return this.http.post(url, payload);
  }
  decrementQuantity(user_Id: string, productId: string): Observable<any> {
    const url = `http://localhost:5000/api/cart/incrmnt?user_Id=${user_Id}&products_Id=${productId}`;
    const payload = { user_Id, productId };
    return this.http.post(url, payload);
  }


}
