import { PresentationFormComponent } from './../components/presentation-form/presentation-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderNewPage } from './order-new.page';

const routes: Routes = [
  {
    path: '',
    component: OrderNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderNewPage, PresentationFormComponent]
})
export class OrderNewPageModule {}
