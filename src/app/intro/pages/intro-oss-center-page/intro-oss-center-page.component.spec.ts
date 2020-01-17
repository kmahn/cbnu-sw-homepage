import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroOssCenterPageComponent } from './intro-oss-center-page.component';

describe('IntroOssCenterPageComponent', () => {
  let component: IntroOssCenterPageComponent;
  let fixture: ComponentFixture<IntroOssCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroOssCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroOssCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
