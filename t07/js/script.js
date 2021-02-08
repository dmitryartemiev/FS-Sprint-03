'use strict'

class LinkedList {
  constructor(data) {
    this.data = { ...data };
    this.next = 0;
  }

  [Symbol.iterator] = () => {
    return {
      current: this.next,
      structure: this.data,
      next() {
        if (this.structure[this.current] == undefined) {
          return { done: true };
        } else {
          return { done: false, value: this.structure[this.current++] };
        }
      },
    };
  };

  add(value) {
    let count = 0;
    let obj = {};

    for (const item of this) {
      obj[count] = item;
      count++;
    }
    obj[count] = value;
    this.data = obj;
  }

  remove(value) {
    let count = 0;
    let obj = {};
    let find = false;
    for (const item of this) {
      if (item == value && find == false) {
        find = true;
        continue;
      }
      obj[count] = item;
      count++;
    }
    this.data = obj;
  }
  contains(value) {
    for (const item of this) {
      if (item == value) {
        return true;
      }
    }
    return false;
  }
  clear() {
    this.data = {};
  }
  count() {
    let counter = 0;
    for (const item of this) {
      counter++;
    }
    return counter;
  }
  log() {
    let arr = Array.from(this);
    console.log(arr.join(", "));
  }
}
function createLinkedList(array) {
  return new LinkedList(array);
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.add(10);
ll.remove(100);
ll.remove(100);
ll.remove(100);
console.log(ll.contains(100));
ll.log();
for (const n of ll) {
  console.log(n);
}
