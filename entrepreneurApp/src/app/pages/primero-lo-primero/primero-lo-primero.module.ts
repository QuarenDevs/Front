import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeroLoPrimeroPageRoutingModule } from './primero-lo-primero-routing.module';

import { PrimeroLoPrimeroPage } from './primero-lo-primero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeroLoPrimeroPageRoutingModule
  ],
  declarations: [PrimeroLoPrimeroPage]
})
export class PrimeroLoPrimeroPageModule {}
