import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoProductoComponent } from './carrito-producto.component';

describe('CarritoProductoComponent', () => {
  let component: CarritoProductoComponent;
  let fixture: ComponentFixture<CarritoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
