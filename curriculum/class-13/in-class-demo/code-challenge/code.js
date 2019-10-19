
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(this.head) {
      node.next = this.head;
      this.head = node;
    }
    else {
      this.head = node;
    }
  }

  addToEnd(value) {
    const newNode = new Node(value);
    let node = this.head;
    if(!node) {
      this.head = node;
      return;
    }

    while(node.next) {
      node = node.next;
    }

    node.next = newNode;
  }

  remove() {
    const result = this.head;
    this.head = this.head ? this.head.next : null;
    return result ? result.value : null;
  }

  findAndRemove(predicateFn) {
    let node = this.head;
    let prior = null;

    while(node) {
      if(predicateFn(node.value)) {
        if(prior) prior.next = node.next;
        else this.head = node.next;
        return node.value;
      }
      prior = node;
      node = node.next;
    }

    return null;
  }

  findNode(predicateFn) {
    let node = this.head;

    while(node) {
      if(predicateFn(node.value)) return node;
      node = node.next;
    }

    return null;
  }

  find(predicateFn) {
    const node = this.findNode(predicateFn);
    return node ? node.value : null;
  }

  insert(value, afterValue) {
    const node = new Node(value);
    const found = this.findNode(value => value === afterValue);

    if(found) {
      node.next = found.next;
      found.next = node;
    }
  }

  toString() {
    let result = '';
    let node = this.head;

    while(node) {
      result += (result ? '-' : '') + node.value;
      node = node.next;
    }

    return result;
  }
}

class Stack {

  constructor() {
    this.list = new LinkedList();
  }

  push(item) {
    this.list.add(item);
  }

  pop() {
    return this.list.remove();
  }

  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  get top() {
    return this.peek();
  }
}

class Queue {

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(item) {
    this.list.addToEnd(item);
  }

  dequeue() {
    return this.list.remove();
  }

}

module.exports = {
  LinkedList,
  Stack,
  Queue
};

