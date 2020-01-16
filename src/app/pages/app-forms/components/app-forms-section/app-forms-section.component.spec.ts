import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsSectionComponent } from './app-forms-section.component';

describe('AppFormsSectionComponent', () => {
  let component: AppFormsSectionComponent;
  let fixture: ComponentFixture<AppFormsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
