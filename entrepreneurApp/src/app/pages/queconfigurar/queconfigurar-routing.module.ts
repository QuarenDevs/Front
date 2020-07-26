import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueconfigurarPage } from './queconfigurar.page';

const routes: Routes = [
  {
    path: '',
    component: QueconfigurarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueconfigurarPageRoutingModule {}
