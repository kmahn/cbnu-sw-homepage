import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsListPageComponent } from './app-forms-list-page.component';

describe('AppFormsListPageComponent', () => {
  let component: AppFormsListPageComponent;
  let fixture: ComponentFixture<AppFormsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
