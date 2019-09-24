import { TAGS } from './constants';

export function getParentNode(): Node {
  const selection = window.getSelection();

  if (selection.rangeCount === 0) {
    return null;
  }

  let node = selection.anchorNode;

  if (!node) {
    return null;
  }
  while (!TAGS.includes(node.nodeName)) {
    node = node.parentNode;
    if (!node) {
      break;
    }
  }

  return node;
}
