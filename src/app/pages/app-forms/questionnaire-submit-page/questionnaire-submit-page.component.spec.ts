import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSubmitPageComponent } from './questionnaire-submit-page.component';

describe('QuestionnaireSubmitPageComponent', () => {
  let component: QuestionnaireSubmitPageComponent;
  let fixture: ComponentFixture<QuestionnaireSubmitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSubmitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSubmitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
