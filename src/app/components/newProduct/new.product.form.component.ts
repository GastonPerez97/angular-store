import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            id: [0, [Validators.required, Validators.pattern('[1-9][0-9]*')]],
            name: ['', Validators.required],
            price: [0, [Validators.required, Validators.pattern('[1-9][0-9]*')]],
            category: ['Seleccionar', [Validators.required, Validators.pattern('^(?!.*Seleccionar).*$')]],
            description: ['', Validators.required],
            urlImage: ['', [Validators.required, Validators.pattern('(http(s?):\/\/.*\.(?:png|jpg))')]],
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

    public newProductFormGet(name: string) {
        return this.checkoutForm.get(name);
    }
}
