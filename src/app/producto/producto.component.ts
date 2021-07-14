import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
@Input() dataEntrante:any


  constructor() { }

  ngOnInit(): void {
  }

}
