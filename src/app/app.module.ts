import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    ProductComponent,
    ChatboxComponent,
    ProductDetailComponent,
    ListCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
