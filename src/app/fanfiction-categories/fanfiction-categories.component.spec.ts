import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanfictionCategoriesComponent } from './fanfiction-categories.component';

describe('FanfictionCategoriesComponent', () => {
  let component: FanfictionCategoriesComponent;
  let fixture: ComponentFixture<FanfictionCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanfictionCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanfictionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
