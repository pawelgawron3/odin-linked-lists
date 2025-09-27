import { LinkedList } from "./linkedList.js";

let linkedList = new LinkedList();

console.log(linkedList.size());
linkedList.prepend(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(linkedList.toString());
console.log(linkedList.find(30));
console.log(linkedList.size());
linkedList.pop();
console.log(linkedList.size());
console.log(linkedList.find(30));
