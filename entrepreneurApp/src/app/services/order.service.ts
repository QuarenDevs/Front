import { ApiRequestService } from './api-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = 'http://test2-env.eba-tvw4kr2m.us-east-1.elasticbeanstalk.com/api/v1.0/purchase_orders/';

  constructor(private api: ApiRequestService) { }

  async getOrders() {
    return await this.api.callApiGet(this.url);
  }

  downloadReceipt(order) {

  }

  marcarComoEntregado(order) {

  }

  enviarOrden(uuid, pedido, publicComments, privateComments) {

  }

  async getOrderInfo(idOrder) {
    return await this.api.callApiGet(this.url + idOrder);
  }
}
