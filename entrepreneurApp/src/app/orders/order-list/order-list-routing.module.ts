import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListPage } from './order-list.page';

const routes: Routes = [
  {
    path: '',
    component: OrderListPage
  },
  {
    path: 'order-new',
    loadChildren: () => import('../order-new/order-new.module').then( m => m.OrderNewPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('../order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderListPageRoutingModule {}
