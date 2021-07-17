import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../interfaces/Product";
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
    public producto: Product;
    public id: any;

    constructor(private _route: ActivatedRoute, private productService: ProductsService) {
        this.producto = {
            id: 0,
            name: "",
            category: "",
            price: 0,
            description: "",
            urlImage: "",
            quantity: 1,
            totalPrice: 0
        }

        // if (this._route.snapshot.paramMap.get('id') != number)
        this.id = this._route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.getProduct();
    }

    public getProduct() {
        this.productService.getProductById(this.id)
        .subscribe(producto => {
            this.producto = producto;
        });
    }
}
