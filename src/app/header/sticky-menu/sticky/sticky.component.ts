import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {
  isHidden = false;
  lastScrollTop = 0;
  user: any = null;
  imageCard = '/assets/image/giohang.jpg';
  isDropdownVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isHidden = currentScroll > this.lastScrollTop && currentScroll > 100;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user =this.authService.getUserFromStorage();
  }



toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}


  login() {
    window.location.href="/login/LG";
  }

  logout() {
    this.authService.logout();
    this.user = null;
    window.location.href="/home/home-CBuy";
  }


  onOptionSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    switch (selectedValue) {
      case 'orders':
        this.navigateToOrders();
        break;
      case 'cart':
        this.navigateToCart();
        break;
      case 'profile':
        this.navigateToProfile();
        break;
    }
  }
  
  navigateToOrders() {
    console.log('Chuyển đến Đơn Mua');
    // Thêm logic điều hướng hoặc gọi API ở đây
  }
  
  navigateToCart() {
    console.log('Chuyển đến Giỏ Hàng');
    window.location.href="/cart/list-cart";
  }
  
  navigateToProfile() {
    console.log('Chuyển đến Thông Tin Cá Nhân');
  }

}
