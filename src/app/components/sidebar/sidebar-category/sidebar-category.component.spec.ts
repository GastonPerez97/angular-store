import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoryComponent } from './sidebar-category.component';

describe('SidebarCategoryComponent', () => {
  let component: SidebarCategoryComponent;
  let fixture: ComponentFixture<SidebarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
