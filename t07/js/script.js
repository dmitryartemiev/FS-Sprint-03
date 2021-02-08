"use stict";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  getAt() {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }
  remove(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (this.head.data == data) {
      this.head = this.head.next;
      return;
    } else {
    }
  }
  clear() {
    this.head = null;
  }
  count() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  *[Symbol.iterator]() {
    for (let current = this.head; current !== null; current.next) {
      return yield current;
    }
  }
}

let list = new LinkedList();
list.add(42);
list.add(22);
list.add(12);
// list.remove(22);

console.log( list[Symbol.iterator]());

console.log(list);
console.log(list.count());
console.log(list.clear());
console.log(list);
