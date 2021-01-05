import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossoverCategoriesComponent } from './crossover-categories.component';

describe('CrossoverCategoriesComponent', () => {
  let component: CrossoverCategoriesComponent;
  let fixture: ComponentFixture<CrossoverCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossoverCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossoverCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
