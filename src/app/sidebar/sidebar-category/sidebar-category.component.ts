import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.css']
})
export class SidebarCategoryComponent implements OnInit {
  @Input()
  categoria: string[];

  constructor() {
    this.categoria = []
   }

  ngOnInit(): void {
  }

}
