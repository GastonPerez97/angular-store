import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private restService: RestService) {}

  public getAllProducts() {
    return this.restService.get(`${environment.baseApiUrl}/products`);
  }

  public getProductsByCategory(category: any) {
    return this.restService.get(
      `${environment.baseApiUrl}/products/${category}`
    );
  }

  public getProductById(id: string) {
    return this.restService.get(`${environment.baseApiUrl}/product/${id}`);
  }

  public newProduct(product: any) {
    return this.restService.post(`${environment.baseApiUrl}/product`, product);
  }
}
