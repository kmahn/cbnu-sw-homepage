import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ColorListItemComponent } from './color-list-item/color-list-item.component';
import { MatIconModule } from '@angular/material';
import { ColorListItemTitleComponent } from './color-list-item-title/color-list-item-title.component';



@NgModule({
  declarations: [SectionHeaderComponent, SubtitleComponent, ColorListItemComponent, ColorListItemTitleComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SectionHeaderComponent, SubtitleComponent, ColorListItemComponent]
})
export class UiModule { }
