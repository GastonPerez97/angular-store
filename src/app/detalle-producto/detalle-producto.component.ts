import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
    public producto: Product;
    public id: any;

    constructor(private _route: ActivatedRoute, private RestService: RestService,
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
        this.RestService.get(`/taller-web-2/api/product/${this.id}`)
        .subscribe(producto => {
            this.producto = producto;
        });
    }
}
