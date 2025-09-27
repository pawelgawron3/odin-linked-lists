import { LinkedList } from "./linkedList.js";

let linkedList = new LinkedList();

linkedList.prepend(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.size());
console.log(linkedList.node());
console.log(linkedList.tail());
