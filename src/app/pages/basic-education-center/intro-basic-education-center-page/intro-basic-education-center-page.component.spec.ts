import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBasicEducationCenterPageComponent } from './intro-basic-education-center-page.component';

describe('IntroBasicEducationCenterPageComponent', () => {
  let component: IntroBasicEducationCenterPageComponent;
  let fixture: ComponentFixture<IntroBasicEducationCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBasicEducationCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBasicEducationCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
