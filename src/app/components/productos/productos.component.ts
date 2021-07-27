import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productos: Product[];
    categoria: any;
	hideSpinner = false;

    constructor(private productServices: ProductsService, private _route: ActivatedRoute) {
        this.productos = [];
    }

    ngOnInit(): void {
        this._route.paramMap.subscribe(params => {
            this.categoria = params.get('category');
            this.categoria != null ? this.getProductsByCategory(this.categoria) : this.getAllProducts();
        });
    }

    public getAllProducts() {
        this.productServices.getAllProducts()
        .subscribe(productos => {
            this.productos = productos;
			this.hideSpinner = true;
        });
    }

    public getProductsByCategory(category: any) {
        this.productServices.getProductsByCategory(category)
        .subscribe(productos => {
            this.productos = productos;
			this.hideSpinner = true;
        });
    }
}