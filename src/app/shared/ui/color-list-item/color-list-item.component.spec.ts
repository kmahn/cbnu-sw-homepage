import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListItemComponent } from './color-list-item.component';

describe('IconListItemComponent', () => {
  let component: ColorListItemComponent;
  let fixture: ComponentFixture<ColorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
