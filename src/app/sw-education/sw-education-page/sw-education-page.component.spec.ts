import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwEducationPageComponent } from './sw-education-page.component';

describe('SwEducationPageComponent', () => {
  let component: SwEducationPageComponent;
  let fixture: ComponentFixture<SwEducationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwEducationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwEducationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
