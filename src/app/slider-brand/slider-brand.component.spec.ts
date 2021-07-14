import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBrandComponent } from './slider-brand.component';

describe('SliderBrandComponent', () => {
  let component: SliderBrandComponent;
  let fixture: ComponentFixture<SliderBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
