import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/Product';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productos: Product[];
    categoria: any;

    constructor(private RestService: RestService, private _route: ActivatedRoute) {
        this.productos = [];
    }

    ngOnInit(): void {
        this._route.paramMap.subscribe(params => {
            this.categoria = params.get('category');
            this.categoria != null ? this.getProductsByCategory(this.categoria) : this.getAllProducts();
        });
    }

    public getAllProducts() {
        this.RestService.get('/taller-web-2/api/products')
        .subscribe(productos => {
            this.productos = productos;
        });
    }

    public getProductsByCategory(category: any) {
        this.RestService.get(`/taller-web-2/api/products/${category}`)
        .subscribe(productos => {
            this.productos = productos;
        });
    }
}
