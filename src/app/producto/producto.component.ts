import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
    @Input()
    producto: Product;

    constructor(private carritoService: CarritoService, private router: Router, private authService: AuthService) {
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

    async addToCart() {
        const isLoggedIn = await this.authService.getCurrentUser();

        if (isLoggedIn) {
            this.carritoService.add(this.producto);
            this.showConfirmedAlert();
        } else {
            this.showLoginAlert();
        }
    }

    showConfirmedAlert() {
        const swalWithBootstrapButtons = this.prepareAlertButtons();

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

    showLoginAlert() {
        const swalWithBootstrapButtons = this.prepareAlertButtons();

        swalWithBootstrapButtons.fire({
            icon: 'error',
            title: '¡Inicia sesión para agregar al carrito!',
            confirmButtonText: 'Iniciar Sesión',
            showDenyButton: true,
            denyButtonText: 'Volver'
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigate(['/ingresar']);
            }
        });
    }

    prepareAlertButtons() {
        return Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-danger me-3',
                denyButton: 'btn btn-outline-primary'
            },
            buttonsStyling: false
        });
    }
}
