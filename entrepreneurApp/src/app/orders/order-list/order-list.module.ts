import { OrderListPageRoutingModule } from './order-list-routing.module';
import { OrderService } from '../../services/order.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderListPage } from './order-list.page';

const routes: Routes = [
  {
    path: '',
    component: OrderListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderListPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListPage]
})
export class OrderListPageModule {}
