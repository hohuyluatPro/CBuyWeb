import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cart', loadChildren: () => import('./cart/cart-routing.module').then(m => m.CartRoutingModule )}, // cart
  {path: 'my-pro', loadChildren: () => import('./myproduct/myproduct.module').then(m => m.MyproductModule )}, // product
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule )}, // LOGIN
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // Trang chủ
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect nếu không tìm thấy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
