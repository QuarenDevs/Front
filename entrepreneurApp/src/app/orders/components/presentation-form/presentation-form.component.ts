import { ApiRequestService } from '../../../services/api-request.service';
import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-presentation-form',
  templateUrl: './presentation-form.component.html',
  styleUrls: ['./presentation-form.component.scss'],
})
export class PresentationFormComponent implements OnInit {

  @Input() limitMaximumWithAvailable: boolean;
  
  endPoint: string = "products";
  
  products = [];

  pedidos = [];
  
  
  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(){
    this.getProducts();
    
    if(this.limitMaximumWithAvailable == undefined)
    {
      this.limitMaximumWithAvailable = false;
    }
  }

  ionViewDidEnter() {
  }
  
  async getProducts() {
    
  }
  
  getPresentationRequest()
  {
    var request = [];
    for (var i = 0; i < this.pedidos.length; i++) {
      var element = this.pedidos[i];
      for (var j = 0; j < element.presentations.length; j++) {
        var p = element.presentations[j];
        if (p.requested_quantity > 0) {
          request.push(p);
        }
      }
    }
    return request;
  }

  getTotalPrice()
  {
    var items = this.getPresentationRequest();
    var totalPrice = 0;
    for(var i = 0; i < items.length; i++)
    {
      var quantity = items[i]['requested_quantity'];
      var singlePrice = items[i]['wholesale_price'];
      totalPrice += quantity * singlePrice;
    }

    return totalPrice;
  }
}
