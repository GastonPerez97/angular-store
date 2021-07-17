import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    constructor(private restService: RestService, private formBuilder: FormBuilder) {
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
        this.restService.get('/taller-web-2/api/categories')
        .subscribe(categories => {
            this.categories = categories;
        });
    }
    
    public onSubmit() {
        this.message = '';
        this.error = '';
        this.restService.post('/taller-web-2/api/product', this.checkoutForm.value).subscribe(
            (response) => this.message = response,
            (error) => this.error = error,
        )
    }
}
