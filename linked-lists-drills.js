const LL = require('./linked-lists');
//1 - Create a linked list class

//SEE LINKED-LISTS.JS//

//2 - Create a singly linked list
function main() {
  let SLL = new LL();

  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // console.log(SLL);
  // SLL.insertLast('Tauhida');
  // console.log(SLL.head.value);
  // SLL.remove('squirrel');
  // SLL.remove('Apollo');
  // console.log('should be boomer: ', SLL.head.value);

  // SLL.insertBefore('Athena', 'Boomer');
  // console.log('should be athena: ', SLL.head.value);

  SLL.insertAfter('Hotdog', 'Helo');
  console.log(SLL);
}

main();

//3 - Supplemental functions for a linked list
function display(list) {
  let currNode = this.head;
  while(currNode.next.value !== null) {
    currNode = currNode.next;
    console.log('Node Contains: ', currNode.value);
  }
  console.log('End of list.');
}

function size(list) {

}

function isEmpty(list) {

}

function findPrevious(list, node){

}

function findLast(list) {
  let currNode = this.head;
  while(currNode.next.value !== null) {
    currNode = currNode.next;
  }
  console.log('The last node contains: ', currNode.value);
}

//4 - Mystery Program

//5 - Reverse a list

//6 - 3rd from the end

//7 - Middle of a list

//8 - Cycle in a list

//9 - Doubly linked list

//10 - Reverse a DLL