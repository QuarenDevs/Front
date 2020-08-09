import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  ngOnInit() {
    

  }
  
/* 
  currentOrder:any;

  idOrder: any;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
  ) { }

  ionViewDidEnter()
  {
    this.idOrder = this.activatedRoute.snapshot.paramMap.get('order');
    this.orderService.getOrderInfo(this.idOrder).then(order => {
        this.currentOrder = order;
    });
  }

  downloadReceipt()
  {
    if( this.currentOrder != undefined)
    {
      this.orderService.downloadReceipt(this.currentOrder);
    }
  }

  async eliminarOrden()
  {
    let alertRet = await Modals.alert({
      title: 'Error',
      message: "No implementado aún"
    });
  }

  
  marcarComoEntregado()
  {
    if(this.currentOrder != undefined)
    {
      this.orderService.marcarComoEntregado(this.currentOrder).then(data => {
        this.orderService.getOrders().then(dataR => {
          this.router.navigate(['/order-list']);
        })
      });
    }
  }

  
  viewWholesalerDetails(wholesaler)
  {
    this.router.navigate(['/wholesaler-details', {wholesaler: wholesaler.uuid}]);
  } */
}
