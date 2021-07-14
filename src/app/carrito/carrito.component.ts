import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    products: Product[];
    total: number;

    constructor(private carritoService: CarritoService) {
        this.total = 0;
        this.products = [];
    }

    ngOnInit(): void {
        this.products = this.carritoService.getAll();
        this.total = this.carritoService.getTotal();

        this.carritoService.getTotal$().subscribe(total => {
            this.total = total;
        });

        this.carritoService.getProducts$().subscribe(products => {
            this.products = products;
        });
    }
}
