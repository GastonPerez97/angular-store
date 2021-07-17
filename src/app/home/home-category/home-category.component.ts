import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {
  @Input()
  categoria: string[];


  constructor() {
    this.categoria = []
   }

  ngOnInit(): void {
  }

}
