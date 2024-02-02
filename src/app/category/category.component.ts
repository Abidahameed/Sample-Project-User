import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service'; 
import { UserService } from '../user.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = [
    {
      name: 'Pants',
      
      imageUrl: "../../assets/images/pant1.jpg",
      type: 'pants'
    },
    {
      name: 'Tops',
      
      imageUrl: "../../assets/images/top1.jpg",
      type: 'tops'
    },
    {
      name: 'Jeans',
      
      imageUrl: "../../assets/images/jean1.jpg",
      type: 'jeans'
    },]

    constructor(private router: Router,private categoryservice: CategoryService,  private user:UserService,) { }

    onSeeMoreClick(categoryType: string) {
      console.log(`Navigating to ${categoryType}-collection`);
      switch (categoryType) {
        case 'pants':
          this.router.navigate(['/pantcollection']);
          break;
        case 'tops':
          this.router.navigate(['/topcollection']);
          break;
        case 'jeans':
          this.router.navigate(['/jeeanscollection']);
          break;
        default:
          console.error(`Invalid category type: ${categoryType}`);
          break;
      }
    }
    private navigateToCategory(route: string, categoryType: string): void {
      this.router.navigate([route]);
  
      // Use the CategoryService to send data to the backend
      this.categoryservice.sendCategoryData(categoryType).subscribe(
        response => {
          console.log('Data sent to the backend:', response);
        },
        error => {
          console.error('Error sending data to the backend:', error);
        }
      );
    }
}
