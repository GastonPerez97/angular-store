import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from "../../interfaces/category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Input()
    categorias: Category[];

    constructor(private categoriesService: CategoriesService) {
        this.categorias = [];
    }

    ngOnInit(): void {
        this.getAllCategories();
    }

    public getAllCategories() {
        this.categoriesService.getAllCategories()
        .subscribe(categorias => {
            this.categorias = categorias;
        });
    }
}