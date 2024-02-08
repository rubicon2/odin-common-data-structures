/* eslint-disable max-classes-per-file */
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
    let string = `( ${this.#head.data} ) -> `;
    let current = this.#head;
    while (current.next) {
      string += `( ${current.next.data} ) -> `;
      current = current.next;
    }
    string += 'null';
    return string;
  }

  size() {
    let count = 1;
    let current = this.#head;
    while (current.next) {
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
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    this.tail().next = new Node(value);
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
}
