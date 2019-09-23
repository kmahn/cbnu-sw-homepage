import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cbnu-color-list-item cbnu-color-list-item-title',
  templateUrl: './color-list-item-title.component.html',
  styleUrls: ['./color-list-item-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorListItemTitleComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
