import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getParentNode } from './tools';
import { TAGS } from './constants';

@Component({
  selector: 'cbnu-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss']
})
export class EditorToolbarComponent {

  hiddenFormatPopup = true;
  hiddenListPopup = true;
  hiddenTablePopup = true;
  @Input() editorElement: HTMLElement;
  @Output() clickToolButton: EventEmitter<undefined> = new EventEmitter();

  constructor() {
  }

  get isHeader(): boolean {
    const node = getParentNode();
    return node && /^H\d$/.test(node.nodeName) || false;
  }

  setFormat(tagName: string) {
    this.hiddenFormatPopup = true;
    const selection = window.getSelection();
    if (selection.rangeCount === 0) {
      return;
    }
    const range = selection.getRangeAt(0);
    let node = selection.anchorNode;

    if (node === this.editorElement) {
      const n = document.createElement(tagName);
      const textNode = document.createTextNode('\u00a0');
      n.appendChild(textNode);
      range.insertNode(n);
      range.selectNodeContents(textNode);
    } else {
      node = getParentNode();
      if (!node) {
        return;
      }

      if (node.nodeName.toLowerCase() !== tagName.toLowerCase()) {
        const startOffset = range.startOffset;
        const endOffset = range.endOffset;
        const n = document.createElement(tagName);
        const textNode = document.createTextNode(node.textContent);
        n.appendChild(textNode);
        this.editorElement.removeChild(node);
        range.insertNode(n);
        range.setStart(textNode, startOffset);
        range.setEnd(textNode, endOffset);
      }
    }

    selection.removeAllRanges();
    selection.addRange(range);
    this.clickToolButton.emit();
  }

  toggleFormatPopup() {
    this.hiddenFormatPopup = !this.hiddenFormatPopup;
  }

  execCommand(command: string) {
    const node = getParentNode();
    if (node && !/^H\d$/.test(node.nodeName)) {
      document.execCommand(command, false, null);
    }
    this.clickToolButton.emit();
  }

  execAlignment(alignment: 'left' | 'center' | 'right' | 'justify') {
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    let flag = false;
    let startContainer = range.startContainer;
    let endContainer = range.endContainer;

    while (!TAGS.includes(startContainer.nodeName)) {
      startContainer = startContainer.parentNode;
    }
    while (!TAGS.includes(endContainer.nodeName)) {
      endContainer = endContainer.parentNode;
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.editorElement.childNodes.length; i++) {
      const node: any = this.editorElement.childNodes[i];
      if (node === startContainer) {
        flag = true;
      }

      if (flag) {
        node.style.textAlign = alignment;
      }

      if (node === endContainer) {
        break;
      }
    }
    this.clickToolButton.emit();
  }

}
