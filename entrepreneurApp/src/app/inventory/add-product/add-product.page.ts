import { Product } from './../inventory-item/product';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { InventoryService } from '../services/inventory.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  newProduct = {} as Product;
  newProductForm: FormGroup;

  constructor(private inventoryService: InventoryService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.newProductForm = new FormGroup({
      name: new FormControl(this.newProduct.name, Validators.required),
      description: new FormControl(this.newProduct.description, Validators.required),
      size: new FormControl(this.newProduct.size, Validators.required),
      UP: new FormControl(this.newProduct.unitaryPrice, Validators.required)
    });
  }

  async onSendProduct(){
    this.inventoryService.sendNewProduct({
      name: this.newProductForm.value.name,
      description: this.newProductForm.value.desccription,
      unitaryPrice: this.newProductForm.value.UP,
      size: this.newProductForm.value.size,
    });

    const toast = await this.toastController.create({
      header: 'Toast header',
      color: 'success',
      position: 'middle',
      keyboardClose: true,
      message: 'A new product has been created',
      duration: 2000
    });
    toast.present();
    this.router.navigate(['/inventory']);
  }

}
