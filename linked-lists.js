const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //if null and no links
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, node) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let after = node;
    let tempNode = this.head;

    while(tempNode.next.value !== after) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, after);
  }
  
  insertAfter(item, node) {
    //if list is empy
    if (this.head === null) {
      this.insertFirst(item);
    }  
    //the input value will be the node before insertion
    let before = node;
    //the value currently after the node where insertion is to occur
    let after = node.next;
    //start at the head
    let tempNode = this.head;

    while(tempNode.value !== before) {
      tempNode = tempNode.next;
    }
    //make the next node the item to be inserted which links to the previously next node
    tempNode.next = new _Node(item, after);
  }

  insertAt(item, position) {
    //start at the head
    let tempNode = this.head;
    let after;
    for (let i = 1; i < position; i++) {
      tempNode = tempNode.next;
      after = tempNode.next;
    }
    tempNode.next = new _Node(item, after);
  }
  
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head,
    //make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of the previous node
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }


}

module.exports = LinkedList;