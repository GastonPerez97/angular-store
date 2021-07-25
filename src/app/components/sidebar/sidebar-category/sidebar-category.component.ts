import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.css']
})
export class SidebarCategoryComponent {
    @Input()
    categoria: Category;

    constructor() {
        this.categoria = {
			name: ""
		}
    }
}
