import { Component, OnInit } from '@angular/core';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    products: Product[];
    total: number;

    // productoTest = {
    //     id: 1,
    //     name: 'TECLADO REDRAGON SHIVA K512 RGB',
    //     category: 'Teclados',
    //     unitPrice: 5500,
    //     quantity: 1,
    //     totalPrice: 0
    // }

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

        // localStorage.setItem("1", JSON.stringify(this.productoTest));
    }

}