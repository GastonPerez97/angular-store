import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productos: Product[];

    constructor(private RestService:RestService) {
        this.productos = [];
    }

    ngOnInit(): void {
        this.getAllProducts();
    }

    public getAllProducts() {
        this.RestService.get('/taller-web-2/api/products')
        .subscribe(productos => {
            this.productos = productos;
        })
    }
}
