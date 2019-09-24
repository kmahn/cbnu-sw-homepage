import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getParentNode } from '../editor-toolbar/tools';

@Directive({
  selector: '[cbnuContentEditable]'
})
export class ContentEditableDirective {

  editableElement: HTMLElement;
  @Output() changeContent: EventEmitter<string> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer,
              elementRef: ElementRef) {
    this.editableElement = elementRef.nativeElement;
  }

  @Input() set cbnuContentEditable(on: boolean) {
    if (on) {
      this.editableElement.setAttribute('contenteditable', 'true');
    } else {
      this.editableElement.removeAttribute('contenteditable');
    }
  }

  @Input() set content(html: string) {
    this.editableElement.innerHTML = html;
  }

  @HostListener('keydown', ['$event']) keydown(event: KeyboardEvent) {
    const key = event.key;
    const node = getParentNode();

    if (!node) {
      return true;
    }

    if (['b', 'B', 'i', 'I'].includes(key)) {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        return false;
      }
    }

    return true;
  }

  @HostListener('keyup', ['$event']) keyup(event: KeyboardEvent) {
    const key = event.key;
    const node = getParentNode();

    if (!node) {
      return true;
    }

    const sel = window.getSelection();
    const range = sel.getRangeAt(0);

    if (key === 'Enter') {
      const textNode = document.createTextNode('\u00a0');
      if (range.startContainer.nodeName === 'DIV') {

        const p = document.createElement('p');
        p.appendChild(textNode);
        this.editableElement.insertBefore(p, range.startContainer);

        while (range.startContainer.childNodes.length > 0) {
          const n = range.startContainer.childNodes[0];
          if (/^(H\d|P)$/.test(n.nodeName)) {
            this.editableElement.insertBefore(n, range.startContainer);
          } else {
            range.startContainer.removeChild(n);
          }
        }

        this.editableElement.removeChild(range.startContainer);
        range.selectNodeContents(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (!range.startContainer.textContent) {
        while (range.startContainer.childNodes.length > 0) {
          range.startContainer.removeChild(range.startContainer.childNodes[0]);
        }
        range.startContainer.appendChild(textNode);
        range.selectNodeContents(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else if (key === 'Backspace') {
      if (node === this.editableElement) {
        event.preventDefault();
        return false;
      }
    } else if (node === this.editableElement) {
      const p = document.createElement('p');
      const textNode = document.createTextNode(sel.anchorNode.textContent);
      this.editableElement.removeChild(sel.anchorNode);
      p.appendChild(textNode);
      range.insertNode(p);
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    this.changeContent.emit(this.editableElement.innerHTML);
    return true;
  }

}
