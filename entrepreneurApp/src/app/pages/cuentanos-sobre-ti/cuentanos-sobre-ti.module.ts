import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentanosSobreTiPageRoutingModule } from './cuentanos-sobre-ti-routing.module';

import { CuentanosSobreTiPage } from './cuentanos-sobre-ti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentanosSobreTiPageRoutingModule
  ],
  declarations: [CuentanosSobreTiPage]
})
export class CuentanosSobreTiPageModule {}
