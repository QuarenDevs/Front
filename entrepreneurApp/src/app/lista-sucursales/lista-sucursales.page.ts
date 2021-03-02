import { Component, OnInit } from "@angular/core";

import { Sucursales } from "../../mock-sucursales";
import { Sucursal } from "src/sucursal";

@Component({
  selector: "app-lista-sucursales",
  templateUrl: "./lista-sucursales.page.html",
  styleUrls: ["./lista-sucursales.page.scss"],
})
export class ListaSucursalesPage implements OnInit {
  constructor() {}

  /**
   * Properties of the class
   */
  sucursales = Sucursales;
  busqueda: boolean = false;
  resultadoBusqueda: Sucursal[] = [];
  /**
   * Methods for the class
   */
  busquedaSucursal(value: string) {
    // Check if the value passed is empty
    if (!value) {
      this.busqueda = false;
      return;
    }
    // Search for the branch in the array of branches
    this.resultadoBusqueda = [];
    this.sucursales.forEach((sucursal) => {
      if (sucursal.nombre.toLocaleLowerCase().search(value) !== -1)
        this.resultadoBusqueda.push(sucursal);
    });
    this.busqueda = true;
  }

  ngOnInit() {}
}
