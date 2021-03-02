import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSucursalesPageRoutingModule } from './lista-sucursales-routing.module';

import { ListaSucursalesPage } from './lista-sucursales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSucursalesPageRoutingModule
  ],
  declarations: [ListaSucursalesPage]
})
export class ListaSucursalesPageModule {}
