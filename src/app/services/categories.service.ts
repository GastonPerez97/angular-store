import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private RestService: RestService) {}

  public getAllCategories() {
    return this.RestService.get(`${environment.baseApiUrl}/categories`);
  }
}
