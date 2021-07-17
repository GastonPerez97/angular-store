import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new.product.form.component.html',
  styleUrls: ['./new.product.component.css']
})
export class NewProductFormComponent implements OnInit {
  @Input()
  categorias: any;

  constructor(private RestService: RestService) {
    this.categorias = [];
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories() {
      this.RestService.get('/taller-web-2/api/categories')
      .subscribe(categorias => {
          this.categorias = categorias;
      });
  }
}
