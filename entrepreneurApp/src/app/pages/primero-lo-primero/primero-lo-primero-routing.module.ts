import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroLoPrimeroPage } from './primero-lo-primero.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeroLoPrimeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeroLoPrimeroPageRoutingModule {}
