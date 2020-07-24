import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentanosSobreTiPage } from './cuentanos-sobre-ti.page';

const routes: Routes = [
  {
    path: '',
    component: CuentanosSobreTiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentanosSobreTiPageRoutingModule {}
