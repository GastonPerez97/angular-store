import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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