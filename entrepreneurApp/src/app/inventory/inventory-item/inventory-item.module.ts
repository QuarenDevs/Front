import { PresentationDescriptionComponent } from './../presentations/presentation-description/presentation-description.component';
import { PresentationsComponent } from './../presentations/presentations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryItemPageRoutingModule } from './inventory-item-routing.module';

import { InventoryItemPage } from './inventory-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryItemPageRoutingModule
  ],
  declarations: [InventoryItemPage, PresentationsComponent, PresentationDescriptionComponent]
})
export class InventoryItemPageModule {}
