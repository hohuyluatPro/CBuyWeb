import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product = {
    name: 'Áo Thun Nam',
    price: 250000,
    mainImage: '/assets/image/hinh-anh-bat-mat-1024x682.jpg',
    images: [
      '/assets/image/hinh-anh-bat-mat-1024x682.jpg',
      '/assets/image/hinh-anh-bat-mat-1024x682.jpg',
      '/assets/image/hinh-anh-bat-mat-1024x682.jpg'
    ],
    description: 'Áo thun nam cao cấp, thoáng mát, dễ chịu.',
    rating: 4.5,
    comments: [
      { user: 'Nguyễn Văn A', comment: 'Sản phẩm đẹp, chất lượng tốt.' },
      { user: 'Trần Thị B', comment: 'Hàng giống mô tả, sẽ mua tiếp!' },
      { user: 'Lê Văn C', comment: 'Giao hàng nhanh, đóng gói chắc chắn.' },
      { user: 'Hoàng Thị D', comment: 'Chất vải rất mềm và mịn, thích lắm!' },
      { user: 'Phạm Anh E', comment: 'Đáng tiền, sẽ giới thiệu cho bạn bè.' },
      { user: 'Nguyễn Văn A', comment: 'Sản phẩm đẹp, chất lượng tốt.' },
      { user: 'Trần Thị B', comment: 'Hàng giống mô tả, sẽ mua tiếp!' },
      { user: 'Lê Văn C', comment: 'Giao hàng nhanh, đóng gói chắc chắn.' },
      { user: 'Hoàng Thị D', comment: 'Chất vải rất mềm và mịn, thích lắm!' },
    ],
    sizes: ['S', 'M', 'L', 'XL']
  };

  relatedProducts = [
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Polo Nam', price: 270000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' },
    { name: 'Áo Sơ Mi Nam', price: 300000, image: '/assets/image/0r4ltv3ag4i1712914224518.jpg' }
  ];
  
  selectedSize = 'M';
  quantity = 1;
  zoomStyle = {};
  isZooming = false;

  constructor() { }

  ngOnInit(): void {
  }

 
  updateMainImage(image: string) {
    this.product.mainImage = image;
  }

  addToCart() {
    alert(`Đã thêm ${this.product.name} vào giỏ hàng!`);
  }

  zoomImage(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomStyle = {
      'background-position': `${x}% ${y}%`,
      'background-image': `url(${this.product.mainImage})`,
      'background-size': '350%'
    };
    this.isZooming = true;
  }

  stopZoom() {
    this.isZooming = false;
  }
  viewProduct(){
    window.location.href="/my-pro/products-detail";
  }

}
