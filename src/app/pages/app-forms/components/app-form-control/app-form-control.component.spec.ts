import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormControlComponent } from './app-form-control.component';

describe('AppFormControlComponent', () => {
  let component: AppFormControlComponent;
  let fixture: ComponentFixture<AppFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
