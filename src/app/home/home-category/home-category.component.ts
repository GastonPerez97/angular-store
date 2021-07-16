import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../interfaces/Product";

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {
  @Input()
  producto: Product;


  constructor() {
    this.producto = {
      id: 0,
      name: "",
      category: "",
      price: 0,
      description: "",
      urlImage: "",
      quantity: 0,
      totalPrice: 0
  }
   }

  ngOnInit(): void {
  }

}
