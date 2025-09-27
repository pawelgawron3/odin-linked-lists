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

  at(index) {
    let k = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (index === k) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
      k++;
    }

    return "There is no such index with node in this LinkedList!";
  }

  pop() {
    if (this.headNode === null) {
      return;
    } else if (this.headNode !== null && this.headNode.nextNode === null) {
      this.headNode = null;
    } else {
      let currentNode = this.headNode;
      while (
        currentNode.nextNode !== null &&
        currentNode.nextNode.nextNode !== null
      ) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
    }
  }

  contains(value) {
    if (this.headNode === null) {
      return false;
    } else {
      let currentNode = this.headNode;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  }

  find(value) {
    let k = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return k;
      }
      currentNode = currentNode.nextNode;
      k++;
    }
    return null;
  }
}

export { LinkedList };
