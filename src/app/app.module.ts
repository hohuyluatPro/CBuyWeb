import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StickyComponent } from './header/sticky-menu/sticky/sticky.component';
import { ProductComponent } from './myproduct/pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { ChatboxComponent } from './chat/page/chatbox/chatbox.component';
import { ProductDetailComponent } from './myproduct/pages/product-detail/product-detail.component';
import { ListCartComponent } from './cart/page/list-cart/list-cart.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthService } from './core/service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeKeycloak } from './keycloak-init.factory';


@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    ProductComponent,
    ChatboxComponent,
    ProductDetailComponent,
    ListCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    deps: [KeycloakService], // ✅ Truyền dưới dạng dependency
    multi: true
  },
  KeycloakService], // ✅ Định nghĩa sau cùng để tránh vòng lặp],
  bootstrap: [AppComponent]
})
export class AppModule { }
