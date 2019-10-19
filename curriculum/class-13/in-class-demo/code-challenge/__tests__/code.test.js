const { Stack, Queue, LinkedList } = require('../code');

describe('code challenge', () => {


  describe('Stack with Array', () => {

    class Stack {

      constructor() {
        this.list = [];
      }

      push(item) {
        this.list.push(item);
      }

      pop() {
        return this.list.pop();
      }

      peek() {
        return this.list[this.list.length - 1];
      }
    }

    it('FILO', () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it('peek', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
    });

  });

  describe('LinkedList', () => {

    let linkedList = null;
    beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add(7);
      linkedList.add(3);
      linkedList.add(2);
    });

    it('adds Node to list', () => {
      expect(linkedList.head.value).toBe(2);
      expect(linkedList.head.next.value).toBe(3);
      expect(linkedList.head.next.next.value).toBe(7);
      expect(linkedList.toString()).toBe('2-3-7');
    });

    it('adds Node to end of list', () => {
      linkedList.addToEnd(4);
      expect(linkedList.toString()).toBe('2-3-7-4');
    });

    it('find', () => {
      const found = linkedList.find(value => {
        return value === 7;
      });

      expect(found).toBe(7);
    });

    it('insert', () => {
      linkedList.insert(12, 3);
      expect(linkedList.toString()).toBe('2-3-12-7');
    });

    it('removes', () => {
      expect(linkedList.remove()).toBe(2);
      expect(linkedList.toString()).toBe('3-7');
    });

    it('finds and removes', () => {
      const found = linkedList.findAndRemove(value => value === 3);
      expect(found).toBe(3);
      expect(linkedList.toString()).toBe('2-7');
    });
  });

  describe('Stack with LinkedList', () => {


    it('FILO', () => {
      const stack = new Stack();

      stack.push(1);
      expect(stack.top).toBe(1);
      stack.push(2);
      expect(stack.top).toBe(2);
      stack.push(3);
      expect(stack.top).toBe(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it('peek', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
    });

  });

  describe('Queue with LinkedList', () => {

    it('FIFO', () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
    });


  });

  describe.skip('Pet Queue', () => {
    
    class PetQueue {
      constructor() {
        this.list = new LinkedList();
      }

      enqueue(animal) {
        this.list.add(animal);
      }

      dequeue(type) {
        let found = null;
        if(type) {
          found = this.list.findAndRemove(pet => pet.type === type);
        }

        if(!found) found = this.list.remove();

        return found;
      }
    }

    it('shelters animals', () => {
      const pq = new PetQueue();

      pq.enqueue({ name: 'snowball', type: 'cat' });
      pq.enqueue({ name: 'fluffy', type: 'cat' });
      pq.enqueue({ name: 'fido', type: 'dog' });
      pq.enqueue({ name: 'boots', type: 'cat' });

      expect(pq.dequeue().name).toBe('snowball');
    });

  });

});