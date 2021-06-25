import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioProductoComponent } from './precio-producto.component';

describe('PrecioProductoComponent', () => {
  let component: PrecioProductoComponent;
  let fixture: ComponentFixture<PrecioProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
