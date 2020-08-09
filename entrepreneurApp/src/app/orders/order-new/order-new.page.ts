import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.page.html',
  styleUrls: ['./order-new.page.scss'],
})
export class OrderNewPage implements OnInit {

  endPoint:string = "orders";
  
  customers: any;
  
  customer: any;
  
  resultado: any;

  public_comments: string;

  private_comments: string;
  
  fechaMinima: string;

  planned_delivery_date: string;

  creacionDeOrdenSolicitada: boolean;

  
  constructor()
  {}

  ngOnInit() {
    this.getCustomers();
    this.creacionDeOrdenSolicitada = false;
  }

  ionViewDidEnter()
  {
    this.fechaMinima = new Date().toISOString();
  }

  async getCustomers() {
    /* this.customerService.getWholesalers().then(data =>
      {
        this.customers = data;
      }
    ); */
  }

  
  async enviarOrden(pedido) {
    
    /* this.orderService.enviarOrden(this.customer.uuid, pedido, this.public_comments, this.public_comments).then(data =>
      {
        this.creacionDeOrdenSolicitada = false;
        this.router.navigate(['/order-list']);
      }
    ); */
 }
  async crearOrden()
  {
    /* var esValido = true;
    var errores = [];

    if(this.customer == undefined)
    {
      errores.push('Debe seleccionar un cliente');
      esValido = false;
    }

    let itemsPedidos = this.presentationsForm.getPresentationRequest();

    if(itemsPedidos.length == 0)
    {
      errores.push('Debe seleccionar al menos una presentación');
      esValido = false;
    }

    if (this.creacionDeOrdenSolicitada == true)
    {
      errores.push('Ya hay una solicitud creándose');
      esValido = false;
    }

    if(esValido)
    {
      var pedidoFinal = this.customer.name + "\n\n";
     
     var producto = "";
     
      itemsPedidos.forEach(element => {
        if(producto != element.product){
          if(producto != "")
          {
            pedidoFinal +="\n\n";
          }
          producto = element.product;
          pedidoFinal += producto;
          pedidoFinal +=" \n";
        }
        pedidoFinal += ""+element.label + ": " + element.requested_quantity + " unidades\n";
      });
      

      let confirmRet = await Modals.confirm({
        title: 'Corfirmar orden',
        message: pedidoFinal
      });
      if( confirmRet.value)
      {
        console.log("enviar peticiión");
        this.creacionDeOrdenSolicitada = true;
        this.enviarOrden(itemsPedidos);
      }
    }
    else
    {
      var error = "";
      errores.forEach(element => {
        error += element+"\n";
      });

      let alertRet = await Modals.alert({
        title: 'Error',
        message: error
      });
    }*/
  } 

}
