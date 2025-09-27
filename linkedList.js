import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let prevHead = this.head;
      this.head = new Node(value, prevHead);
    }
  }

  size() {
    if (this.head === null) {
      return "Number of nodes: 0";
    } else {
      let k = 1;
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        k++;
        currentNode = currentNode.nextNode;
      }
      return `Number of nodes: ${k}`;
    }
  }
}
