import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero-lo-primero',
  templateUrl: './primero-lo-primero.page.html',
  styleUrls: ['./primero-lo-primero.page.scss'],
})
export class PrimeroLoPrimeroPage implements OnInit {

   isRegistered: boolean;
   storeName: string;  

  constructor() {

    this.isRegistered = false;
    this.storeName = "";
   }

  ngOnInit() {
  }
}
