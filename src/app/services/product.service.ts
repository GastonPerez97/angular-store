import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(private restService: RestService) {}

    public getAllProducts() {
        return this.restService.get('https://angular-store-api.herokuapp.com/taller-web-2/api/products');
    }

    public getProductsByCategory(category: any) {
        return this.restService.get(`https://angular-store-api.herokuapp.com/taller-web-2/api/products/${category}`);
    }

	public getProductById(id: string) {
		return this.restService.get(`https://angular-store-api.herokuapp.com/taller-web-2/api/product/${id}`);
	}

    public newProduct(product: any) {
        return this.restService.post('https://angular-store-api.herokuapp.com/taller-web-2/api/product', product);
    }
}