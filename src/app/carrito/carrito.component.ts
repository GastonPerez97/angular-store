import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Product } from "../interfaces/Product";
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    products: Product[];
    total: number;
    isLoggedIn: any;

    constructor(private carritoService: CarritoService, private authService: AuthService,
                private router: Router) {
        this.total = 0;
        this.products = [];
    }

    async ngOnInit(): Promise<void> {
        const isLoggedIn = await this.authService.getCurrentUser();

        if (isLoggedIn) {
            this.products = this.carritoService.getAll();
            this.total = this.carritoService.getTotal();
    
            this.carritoService.getTotal$().subscribe(total => {
                this.total = total;
            });
    
            this.carritoService.getProducts$().subscribe(products => {
                this.products = products;
            });
        } else
            this.router.navigate(['/ingresar']);
    }
}
