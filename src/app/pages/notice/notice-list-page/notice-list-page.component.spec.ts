import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeListPageComponent } from './notice-list-page.component';

describe('NoticeListPageComponent', () => {
  let component: NoticeListPageComponent;
  let fixture: ComponentFixture<NoticeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
