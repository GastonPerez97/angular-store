import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
public listaProductos:any = []

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/taller-web-2/api/products/1')
    .subscribe(respuesta => {
      console.log(respuesta);
      this.listaProductos = respuesta;
    })
  }


}
