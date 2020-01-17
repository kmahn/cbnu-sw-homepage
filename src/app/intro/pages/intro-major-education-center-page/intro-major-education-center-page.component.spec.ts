import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMajorEducationCenterPageComponent } from './intro-major-education-center-page.component';

describe('IntroMajorEducationCenterPageComponent', () => {
  let component: IntroMajorEducationCenterPageComponent;
  let fixture: ComponentFixture<IntroMajorEducationCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroMajorEducationCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMajorEducationCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
