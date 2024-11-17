class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert head (first node)
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // console.log alternative, print only data part
  // using this.head because it's inside a class
  // use "head" if it's outside of a class (e.g. in a function)
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertHead(2);
ll.insertHead(1);
ll.insertHead(5);
ll.insertHead(4);
ll.printData();
console.log(ll); // 4 -> 5 -> 1 -> 2
console.log(ll.head.data); // 4
console.log(ll.head.next.data); // after head (4), next is 5

module.exports = LinkedList;
