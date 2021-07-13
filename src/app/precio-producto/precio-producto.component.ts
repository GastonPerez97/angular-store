import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: 'app-precio-producto',
  templateUrl: './precio-producto.component.html',
  styleUrls: ['./precio-producto.component.css']
})
export class PrecioProductoComponent implements OnInit {
    product: Product;

    constructor(private carritoService: CarritoService, private router: Router) {
        this.product = {
            id: 1,
            name: "titulo hardcodeado",
            category: "categoria hardcodeada",
            unitPrice: 1337,
            quantity: 1,
            totalPrice: 0
        }
        
        this.product.totalPrice = this.product.unitPrice;
    }

    ngOnInit(): void {
    }

    addToCart() {
        this.calcTotalPrice();
        this.carritoService.add(this.product);
        this.router.navigate(['/carrito']);
    }

    private calcTotalPrice() {
        this.product.totalPrice = this.product.unitPrice * this.product.quantity;
    }
}
