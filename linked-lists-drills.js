const LL = require('./linked-lists');
//1 - Create a linked list class

//SEE LINKED-LISTS.JS//

//2 - Create a singly linked list
function main() {
  let SLL = new LL();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // console.log(SLL);
  SLL.insertLast('Tauhida');
  // console.log(SLL.head.value);
  // SLL.remove('squirrel');
  // SLL.remove('Apollo');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  return SLL;
}

// list for testing supp functions:
const testList = main();
//3 - Supplemental functions for a linked list
function display(list) {
  let currNode = list.head;
  while(currNode.next !== null) {
    console.log('Node Contains: ', currNode.value);
    currNode = currNode.next;
  }
  console.log('Node Contains: ', currNode.value);
  console.log('End of list.');
}

display(testList);

function size(list) {
  let currNode = list.head;
  let counter = 1;
  while (currNode.next !== null) {
    currNode = currNode.next;
    counter++;
  }
  console.log(`There are ${counter} in the list.`);
}

size(testList);

function isEmpty(list) {
  if (!list.head) {
    console.log('The list is empty');
  } else console.log('The list is not empty.');
}
isEmpty(testList);

function findPrevious(list, node){
  let currNode = list.head;
  let previous;
  while (currNode.value !== node) {
    previous = currNode;
    currNode = currNode.next;
  }
  console.log(`Previous node to ${node} is: ${previous.value}`);
}

findPrevious(testList, 'Tauhida');

function findLast(list) {
  let currNode = list.head;
  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log('The last node contains: ', currNode.value);
}

findLast(testList);

//4 - Mystery Program

//5 - Reverse a list

//6 - 3rd from the end

//7 - Middle of a list

//8 - Cycle in a list

//9 - Doubly linked list

//10 - Reverse a DLL