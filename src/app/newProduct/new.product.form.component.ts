import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new.product.form.component.html',
  styleUrls: ['./new.product.component.css']
})
export class NewProductFormComponent implements OnInit {
  categories: string[] = []; 
  checkoutForm: FormGroup;
  message: string;
  error: string;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder, private categoriesService: CategoriesService) {
    this.checkoutForm = this.formBuilder.group({
      id: [0],
      name: [''],
      price: [0],
      category: [''],
      description: [''],
      urlImage: [''],
    });
    this.message = '';
    this.error = '';
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories() {
    this.categoriesService.getAllCategories()
    .subscribe(categories => {
        this.categories = categories;
    });
  }
  
  public onSubmit() {
    this.message = '';
    this.error = '';
    this.productService.newProduct(this.checkoutForm.value).subscribe(
      (response) => this.message = response,
      (error) => this.error = error,
    )
  }
}
