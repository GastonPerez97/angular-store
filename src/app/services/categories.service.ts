import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    constructor(private RestService: RestService) { }

    public getAllCategories() {
        return this.RestService.get('/taller-web-2/api/categories');
    }
}
