import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { Product } from "../../interfaces/product";
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
    public producto: Product;
    public id: any;
	public hideSpinner = false;
	public hideImage = true;

    constructor(private _route: ActivatedRoute, private productService: ProductsService,
                private carritoService: CarritoService, private router: Router) {
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

        this.id = this._route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.getProduct();
    }

    public getProduct() {
        this.productService.getProductById(this.id)
        .subscribe(producto => {
            this.producto = producto;
			this.hideSpinner = true;
			this.hideImage = false;
        });
    }
}