import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsListComponent } from './app-forms-list.component';

describe('AppFormsListComponent', () => {
  let component: AppFormsListComponent;
  let fixture: ComponentFixture<AppFormsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
