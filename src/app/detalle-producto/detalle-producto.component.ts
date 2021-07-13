import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
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

}
