import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    constructor(private RestService: RestService) { }

    public getAllCategories() {
        return this.RestService.get('https://angular-store-api.herokuapp.com/taller-web-2/api/categories');
    }
}