import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: 'app-precio-producto',
  templateUrl: './precio-producto.component.html',
  styleUrls: ['./precio-producto.component.css']
})
export class PrecioProductoComponent implements OnInit {
  public detalleProducto:any = []
  public id:any

  constructor(private _route: ActivatedRoute, private RestService:RestService) {
    this.id = this._route.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get(`http://localhost:3000/taller-web-2/api/product/${this.id}`)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.detalleProducto = respuesta;
    })
  }

    addToCart() {
        this.calcTotalPrice();
        this.carritoService.add(this.product);
        this.router.navigate(['/carrito']);
    }

    private calcTotalPrice() {
        this.product.totalPrice = this.product.unitPrice * this.product.quantity;
    }
}
