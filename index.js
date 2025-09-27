import { LinkedList } from "./linkedList.js";

let linkedList = new LinkedList();

console.log(linkedList.size());
linkedList.prepend(10);
linkedList.append(20);
console.log(linkedList.size());
