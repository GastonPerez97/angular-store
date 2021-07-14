import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-precio-producto',
  templateUrl: './precio-producto.component.html',
  styleUrls: ['./precio-producto.component.css']
})
export class PrecioProductoComponent implements OnInit {
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
            quantity: 0,
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
            this.producto.quantity = 1;
        });
    }

    addToCart() {
        this.calcTotalPrice();
        this.carritoService.add(this.producto);
        this.router.navigate(['/carrito']);
    }

    private calcTotalPrice() {
        this.producto.totalPrice = this.producto.price * this.producto.quantity;
    }
}
