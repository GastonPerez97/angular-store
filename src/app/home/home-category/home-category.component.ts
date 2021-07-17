import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent {
    @Input()
    categoria: string[];

    constructor() {
        this.categoria = []
    }
}
