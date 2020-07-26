import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueconfigurarPageRoutingModule } from './queconfigurar-routing.module';

import { QueconfigurarPage } from './queconfigurar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueconfigurarPageRoutingModule
  ],
  declarations: [QueconfigurarPage]
})
export class QueconfigurarPageModule {}
