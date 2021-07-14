import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
    @Input()
    producto: Product;

    constructor(private carritoService: CarritoService, private router: Router) {
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
    }

    ngOnInit(): void {
        this.producto.quantity = 1;
        this.producto.totalPrice = this.producto.price * this.producto.quantity;
    }

    addToCart() {
        this.carritoService.add(this.producto);
        this.showConfirmedAlert();
    }

    showConfirmedAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary me-3',
                denyButton: 'btn btn-outline-primary'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            icon: 'success',
            title: '¡Agregado al carrito!',
            text: this.producto.name,
            confirmButtonText: 'Volver',
            showDenyButton: true,
            denyButtonText: 'Ir al carrito'
        }).then((result) => {
            if (result.isDenied) {
                this.router.navigate(['/carrito']);
            }
        });
    }
}
