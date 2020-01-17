import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCoursePageComponent } from './easy-course-page.component';

describe('EasyCosePageComponent', () => {
  let component: EasyCoursePageComponent;
  let fixture: ComponentFixture<EasyCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
