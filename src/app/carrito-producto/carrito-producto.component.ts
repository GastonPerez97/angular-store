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

    // productoTest = {
    //     id: 2,
    //     name: 'TECLADO REDRAGON SHIVA K512 RGB',
    //     category: 'Teclados',
    //     unitPrice: 5500,
    //     quantity: 1,
    //     totalPrice: 0
    // }

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

    addToCart() {
        // this.carritoService.add(this.productoTest);
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
