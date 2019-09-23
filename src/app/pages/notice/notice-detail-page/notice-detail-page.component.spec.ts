import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDetailPageComponent } from './notice-detail-page.component';

describe('NoticeDetailPageComponent', () => {
  let component: NoticeDetailPageComponent;
  let fixture: ComponentFixture<NoticeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
