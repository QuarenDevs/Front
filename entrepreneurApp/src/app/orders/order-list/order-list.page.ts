import { Order } from './../components/order.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orders = [];
  
  constructor(
    private router: Router,
    private orderService: OrderService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit()
  {
    this.getOrders();
  }
  
  ionViewDidEnter()
  {

  }

  async getOrders(){
    this.orders = (await this.orderService.getOrders());
    console.log('this.orders')
    console.log(this.orders)
  }
  
  downloadReceipt(order)
  {
    this.orderService.downloadReceipt(order)
  }

  viewDetails(order)
  {
    this.router.navigate(['order-details', order.sid], {relativeTo: this.route});
  }


  marcarComoEntregado(order)
  {
    this.orderService.marcarComoEntregado(order) 
  }

  
  viewWholesalerDetails(wholesaler)
  {
    this.router.navigate(['/wholesaler-details', {wholesaler: wholesaler.uuid}]);
  }
}
