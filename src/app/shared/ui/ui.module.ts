import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ColorListItemComponent } from './color-list-item/color-list-item.component';
import { MatIconModule } from '@angular/material';
import { ColorListItemTitleComponent } from './color-list-item-title/color-list-item-title.component';
import { EditorComponent } from './editor/editor.component';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';
import { ContentEditableDirective } from './content-editable/content-editable.directive';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAlignCenter, faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faParagraph,
  faStrikethrough,
  faUnderline
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [SectionHeaderComponent, SubtitleComponent, ColorListItemComponent, ColorListItemTitleComponent, EditorComponent, EditorToolbarComponent, ContentEditableDirective],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  exports: [SectionHeaderComponent, SubtitleComponent, ColorListItemComponent, EditorComponent]
})
export class UiModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(
      faParagraph, faBold, faItalic, faUnderline, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify
    );
  }
}
