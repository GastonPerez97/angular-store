import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

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
    this.RestService.get('http://localhost:3000/taller-web-2/api/product/1')
    .subscribe(respuesta => {
      console.log(respuesta);
      this.detalleProducto = respuesta;
    })
  }

}
