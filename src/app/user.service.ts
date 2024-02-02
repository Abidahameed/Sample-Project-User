
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 userId: string = '';

  setUserId(userId: string): void {

    this.userId = userId;
    console.log('User ID set:', this.userId);
  }

  getUserId(): string {
    const userId = this.userId;
    console.log('Getting User ID:', userId); 
    return userId;
  }
}
