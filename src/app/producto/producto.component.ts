import { Component, Input, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarritoService, Product } from '../services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
    @Input() dataEntrante:any

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
        this.carritoService.add(this.product);
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
            text: this.product.name,
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
