import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent {
    @Input()
    categoria: Category;

    constructor() {
        this.categoria = {
			name: ""
		}
    }
}