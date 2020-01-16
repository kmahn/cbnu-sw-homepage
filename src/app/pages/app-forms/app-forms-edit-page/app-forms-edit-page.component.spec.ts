import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsEditPageComponent } from './app-forms-edit-page.component';

describe('AppFormsEditPageComponent', () => {
  let component: AppFormsEditPageComponent;
  let fixture: ComponentFixture<AppFormsEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormsEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
