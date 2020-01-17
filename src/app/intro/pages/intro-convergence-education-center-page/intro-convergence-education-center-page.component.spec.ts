import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroConvergenceEducationCenterPageComponent } from './intro-convergence-education-center-page.component';

describe('IntroConvergenceEducationCenterPageComponent', () => {
  let component: IntroConvergenceEducationCenterPageComponent;
  let fixture: ComponentFixture<IntroConvergenceEducationCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroConvergenceEducationCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroConvergenceEducationCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
