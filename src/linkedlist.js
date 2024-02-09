/* eslint-disable max-classes-per-file */
import isEqual from './isEqual';

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  #head = null;

  constructor(elements) {
    this.#head = new Node(elements[0]);
    let current = this.#head;
    for (let i = 1; i < elements.length; i += 1) {
      current.next = new Node(elements[i]);
      current = current.next;
    }
  }

  toString() {
    let string = '';
    let current = this.#head;
    while (current) {
      string += `( ${current.data} ) -> `;
      current = current.next;
    }
    string += 'null';
    return string;
  }

  size() {
    let count = 0;
    let current = this.#head;
    while (current) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  head() {
    return this.#head;
  }

  tail() {
    let current = this.#head;
    while (current?.next) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    if (!this.#head) this.#head = new Node(value);
    else this.tail().next = new Node(value);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  at(index) {
    // Argument checking
    if (index < 0) throw new Error('called with an index smaller than zero.');
    if (index > this.size() - 1)
      throw new Error(
        'called with an index greater than the length of the list.',
      );
    // If provided index is within the correct range
    let current = this.#head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }
    return current;
  }

  pop() {
    // If the linked list is already empty
    if (this.size() < 1) return null;
    // Get ref so tail can be returned later
    const oldTail = this.tail();
    // Make sure index provided to at() is at least zero
    const newTail = this.at(Math.max(this.size() - 2, 0));
    newTail.next = null;
    // If there is only one node left to remove, oldTail and newTail will be same, and we will want to clear the head ref
    if (newTail === oldTail) this.#head = null;
    // Return the data so linked list can be used as a queue, etc.
    return oldTail.data;
  }

  contains(value) {
    let current = this.#head;
    while (current) {
      if (isEqual(current.data, value)) return true;
      current = current.next;
    }
    // If not found
    return false;
  }

  find(value) {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (isEqual(current.data, value)) return index;
      current = current.next;
      index += 1;
    }
    // If not found
    return null;
  }

  insertAt(value, index) {
    if (index === 0) this.prepend(value);
    else {
      const priorNode = this.at(index - 1);
      const newNode = new Node(value, priorNode.next);
      priorNode.next = newNode;
    }
  }
}
