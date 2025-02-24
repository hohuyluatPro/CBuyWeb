import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartComponent } from './page/list-cart/list-cart.component';

const routes: Routes = [{
    path: 'list-cart',
    component: ListCartComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
