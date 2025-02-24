import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  bestsellers: any[] = [];
  products: any[] = [];
  filters: any = {};
  page: number = 1;
  pageSize: number = 10;
  selectedFilters: any = {};

  constructor() {}

  ngOnInit(): void {
    this.loadFilters();
    this.loadBestsellers();
    this.loadProducts();
  }
  CBuy(){
    window.location.href="/my-pro/products-detail";
  }

  loadFilters(): void {
    this.filters = [
      { name: 'Price', key: 'price', options: ['Low', 'Medium', 'High'] },
      { name: 'Brand', key: 'brand', options: ['Brand A', 'Brand B', 'Brand C'] },
      { name: 'Color', key: 'color', options: ['Red', 'Blue', 'Green'] },
      { name: 'Weight', key: 'weight', options: ['Light', 'Medium', 'Heavy'] }
    ];
  }

  loadBestsellers(): void {
    this.bestsellers = [
      { name: 'Product 1', price: 100, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product 2', price: 200, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product 3', price: 300, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' }
    ];
  }

  loadProducts(): void {
    this.products = [
      { name: 'Product A', price: 50, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product B', price: 75, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product C', price: 120, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product D', price: 150, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product E', price: 180, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product A', price: 50, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product B', price: 75, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product C', price: 120, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product D', price: 150, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' },
      { name: 'Product E', price: 180, image: '/assets/image/hinh-anh-bat-mat-1024x682.jpg' }
    ];
  }

  applyFilters(): void {
    console.log('Filters applied:', this.selectedFilters);
  }
}
