const _doubleNode = require('./doubleNode');

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _doubleNode(item, null, null);
  }
  
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let prevNode;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      prevNode = tempNode;
      console.log(prevNode);
      tempNode.next = new _doubleNode(item, null, prevNode);
      this.tail = tempNode.next;
    }
  }

  insertBefore(item, node) {

  }

  insertAfter(item, node) {

  }

  insertAt(item, position) {

  }

  remove(item) {

  }

  find(item) {
    
  }

}

module.exports = DoublyLinkedList;

