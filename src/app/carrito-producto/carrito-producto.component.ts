import { Component, Input, OnInit } from '@angular/core';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: '[app-carrito-producto]',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent implements OnInit {
    @Input()
    product: Product;

    constructor(private carritoService: CarritoService) {
        this.product = {
            id: 0,
            name: "",
            category: "",
            unitPrice: 0,
            quantity: 0,
            totalPrice: 0
        }
    }

    ngOnInit(): void {
    }

    removeFromCart() {
        this.carritoService.remove(this.product.id.toString());
    }

    incrementQty() {
        this.carritoService.incrementQty(this.product.id.toString());
    }

    decrementQty() {
        this.carritoService.decrementQty(this.product.id.toString());
    }
}