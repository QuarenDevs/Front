import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TusSucursalesPage } from './tus-sucursales.page';

const routes: Routes = [
  {
    path: '',
    component: TusSucursalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TusSucursalesPageRoutingModule {}
