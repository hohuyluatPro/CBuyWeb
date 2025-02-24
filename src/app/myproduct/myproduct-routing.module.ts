import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [ {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products-detail',
    component: ProductDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyproductRoutingModule { }
