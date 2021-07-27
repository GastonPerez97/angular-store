import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { Product } from "../../interfaces/product";
import { AuthService } from '../../services/auth.service';
import { ProductsService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-producto',
  templateUrl: './precio-producto.component.html',
  styleUrls: ['./precio-producto.component.css']
})
export class PrecioProductoComponent implements OnInit {
    public producto: Product;
    public id: any;

    constructor(private _route: ActivatedRoute, private productService: ProductsService,
                private carritoService: CarritoService, private router: Router,
                private authService: AuthService) {
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

        this.id = this._route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.getProduct();
    }

    public getProduct() {
        this.productService.getProductById(this.id)
        .subscribe(producto => {
            this.producto = producto;
            this.producto.quantity = 1;
        });
    }

    async addToCart() {
        const isLoggedIn = await this.authService.getCurrentUser();

        if (isLoggedIn) {
            this.calcTotalPrice();
            this.carritoService.add(this.producto);
            this.router.navigate(['/carrito']);
        } else {
            this.showLoginAlert();
        }
    }
    
    showLoginAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary me-3',
                denyButton: 'btn btn-outline-primary'
            },
            buttonsStyling: false
        });

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

    private calcTotalPrice() {
        this.producto.totalPrice = this.producto.price * this.producto.quantity;
    }
}