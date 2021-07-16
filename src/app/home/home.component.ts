import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { RestService } from '../services/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: Product[];
  categoria: any;

  constructor(private RestService: RestService, private _route: ActivatedRoute) {
    this.productos = [];
}

ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
        this.categoria = params.get('category');
        this.categoria != null ? this.getProductsByCategory(this.categoria) : this.getAllProducts();
    });
}

public getAllProducts() {
    this.RestService.get('/taller-web-2/api/products')
    .subscribe(productos => {
        this.productos = productos;
    });
}

public getProductsByCategory(category: any) {
    this.RestService.get(`/taller-web-2/api/products/${category}`)
    .subscribe(productos => {
        this.productos = productos;
    });
}

}
