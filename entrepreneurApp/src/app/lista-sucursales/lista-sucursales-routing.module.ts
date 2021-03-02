import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSucursalesPage } from './lista-sucursales.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSucursalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSucursalesPageRoutingModule {}
