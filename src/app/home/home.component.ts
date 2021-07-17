import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
