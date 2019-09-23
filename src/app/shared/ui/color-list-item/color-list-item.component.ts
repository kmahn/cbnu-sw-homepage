import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface ColorListItem {
  color?: string;
  title: string;
  list: string[];
}

@Component({
  selector: 'cbnu-color-list-item',
  templateUrl: './color-list-item.component.html',
  styleUrls: ['./color-list-item.component.scss'],
})
export class ColorListItemComponent implements OnInit {

  @Input() color = '#01aeef';
  @Input() item: ColorListItem;

  constructor() {
  }

  ngOnInit() {
  }

}
