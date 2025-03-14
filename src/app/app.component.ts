import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    console.log('đã đăng nhập');
    this.getKeycloakToken();
  }
  title = 'click-one-buy-web';
  async getKeycloakToken() {
    try {
      // Kiểm tra xem Keycloak đã được khởi tạo chưa
      if (await this.keycloakService.isLoggedIn()) {
        // Lấy token từ Keycloak
        console.log('đã đăng nhập');
        const token = await this.keycloakService.getToken();
        
        // Lưu token vào localStorage
        localStorage.setItem('keycloak-token', token);

        console.log('Token đã được lưu vào localStorage: ', token);
      } else {
        console.log('Chưa đăng nhập');
      }
    } catch (error) {
      console.error('Lỗi khi lấy token:', error);
    }
  }
}
