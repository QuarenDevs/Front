import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
  
  private sucursales = [
    {
      id:'1',
      nombre: 'Prueba1',
      ciudad: 'Bogotá',
      direccion: 'Calle 666',
      encargado: 'Pedro Picapiedra',
      celular: '45876875',
      fotoURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Tienda_de_ultramarinos.jpg'
    },
    {
      id:'2',
      nombre: 'Prueba2',
      ciudad: 'Liverpool',
      direccion: 'Street 5',
      encargado: 'Paul McCartney',
      celular: '785545',
      fotoURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Tienda_de_ultramarinos.jpg'
    }
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
