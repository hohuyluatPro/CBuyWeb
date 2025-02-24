import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { shopName : 'Tên Chủ Shop', name: 'Sản phẩm 1', image: '/assets/image/0r4ltv3ag4i1712914224518.jpg', price: 100000, quantity: 1, size: '', color: '', selected: false },
    { shopName : 'Tên Chủ Shop', name: 'Sản phẩm 2', image: '/assets/image/woman-holding-sushi-roll-with-chopsticks-scaled copy.jpg', price: 150000, quantity: 1, size: '', color: '', selected: false },
    // Thêm nhiều sản phẩm nếu cần
];

  sizes = ['S', 'M', 'L'];
  colors = ['Đỏ', 'Xanh', 'Vàng'];
  shippingAddress = '';
  notes = '';
  promoCode = '';
  discount = 0;
  paymentMethods = ['Thẻ tín dụng', 'Chuyển khoản ngân hàng', 'Thanh toán khi nhận hàng'];
  selectedPaymentMethod = '';

  getTotalBill() {
    return this.products
      .filter(product => product.selected)
      .reduce((total, product) => total + product.price, 0); // Giả sử giá mỗi sản phẩm là 100
  }

  getFinalTotal() {
    return this.getTotalBill() - this.discount;
  }

  removeProduct(product: { name: string; image: string; quantity: number; size: string; color: string; selected: boolean; }) {
    this.products = this.products.filter(p => p !== product);
  }

  confirmOrder() {
    // Logic để xác nhận đơn hàng
    alert('Đơn hàng đã được xác nhận!');
  }
}
