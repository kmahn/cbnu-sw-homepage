import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroOrganizationPageComponent } from './intro-organization-page.component';

describe('IntroOrganizationPageComponent', () => {
  let component: IntroOrganizationPageComponent;
  let fixture: ComponentFixture<IntroOrganizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroOrganizationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroOrganizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
