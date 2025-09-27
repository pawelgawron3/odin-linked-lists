import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let prevHeadNode = this.headNode;
      this.headNode = new Node(value, prevHeadNode);
    }
  }

  size() {
    if (this.headNode === null) {
      return "Number of nodes: 0";
    } else {
      let k = 1;
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        k++;
        currentNode = currentNode.nextNode;
      }
      return `Number of nodes: ${k}`;
    }
  }

  node() {
    if (this.headNode !== null) {
      return this.headNode.value;
    }
  }

  tail() {
    if (this.headNode !== null) {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }
}

export { LinkedList };
