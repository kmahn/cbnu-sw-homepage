import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListItemTitleComponent } from './color-list-item-title.component';

describe('ColorListItemTitleComponent', () => {
  let component: ColorListItemTitleComponent;
  let fixture: ComponentFixture<ColorListItemTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorListItemTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorListItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
