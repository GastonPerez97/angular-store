import { Component, Input } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Product } from "../../interfaces/Product";

@Component({
  selector: '[app-carrito-producto]',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent {
    @Input()
    product: Product;

    constructor(private carritoService: CarritoService) {
        this.product = {
            id: 0,
            name: "",
            category: "",
            price: 0,
            description: "",
            urlImage: "",
            quantity: 1,
            totalPrice: 0
        }
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