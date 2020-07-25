import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TusSucursalesPageRoutingModule } from './tus-sucursales-routing.module';

import { TusSucursalesPage } from './tus-sucursales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TusSucursalesPageRoutingModule
  ],
  declarations: [TusSucursalesPage]
})
export class TusSucursalesPageModule {}
