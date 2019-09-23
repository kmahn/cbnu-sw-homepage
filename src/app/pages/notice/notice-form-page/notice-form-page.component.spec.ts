import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeFormPageComponent } from './notice-form-page.component';

describe('NoticeFormPageComponent', () => {
  let component: NoticeFormPageComponent;
  let fixture: ComponentFixture<NoticeFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
