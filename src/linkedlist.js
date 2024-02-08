/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  constructor(elements) {
    this.head = new Node(elements[0]);
    let current = this.head;
    for (let i = 1; i < elements.length; i += 1) {
      current.next = new Node(elements[i]);
      current = current.next;
    }
  }

  toString() {
    let string = '';
    let current = this.head;
    do {
      string += `( ${current.data} ) -> `;
      current = current.next;
    } while (current);
    string += 'null';
    return string;
  }
}
