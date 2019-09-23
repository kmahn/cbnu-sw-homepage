import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroIndustryAcademicCooperationCenterPageComponent } from './intro-industry-academic-cooperation-center-page.component';

describe('IntroIndustryAcademicCooperationCenterPageComponent', () => {
  let component: IntroIndustryAcademicCooperationCenterPageComponent;
  let fixture: ComponentFixture<IntroIndustryAcademicCooperationCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroIndustryAcademicCooperationCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroIndustryAcademicCooperationCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
