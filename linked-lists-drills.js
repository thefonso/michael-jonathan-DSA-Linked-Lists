const LL = require('./linked-lists');
const _Node = require('./node');
const DLL = require('./doubly-linked-lists');
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
let testList = main();
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
  return counter;
}

console.log(`there are ${size(testList)} elements in the list`);

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
/* 
  The mystery program:
   - starts at the head of the list 
   - if it has not reached the end, moves to the next node
   - if the next node is not null, it moves to evaluate the contents of the node next to it
   - it overwrites the contents of duplicated node values with the next node.
   
   In essence, it searches the list for duplicate nodes (adjacent) and deletes them.

   The time complexity of this algorithm is O(nlog(n)),
   because for every increase in input, there must be additional computations, but not in an exponential fashion.
   1 - 1
   2 - 3
   3 - 6
   4 - 9
   5 - 14  
   */

//5 - Reverse a list

function reverse(head) {
  console.log(head);
  if(head === null || head.next === null){
    return head;
  }   let newHead = reverse(head.next);
  
  head.next.next = head;
  head.next = null;
  return newHead;
}

console.log('reverse, reverse! ', reverse(testList.head));

//6 - 3rd from the end
testList = main();

function thirdFromEnd(list) {
  let length = size(list);
  console.log(length);
  let currentNode = list.head;
  if (length < 3) {
    return 'Linked list is too short!';
  }
  for (let i = 0; i < length - 3; i++) {
    currentNode = currentNode.next;
  }
  console.log('3rd from end: ', currentNode.value);
  return currentNode;
}

thirdFromEnd(testList);

//7 - Middle of a list
function middleOfList(list) {
  let currNode = list.head;
  let length = size(list);
  let midpoint;
  let after;
  if (length % 2 === 0) {
    midpoint = length / 2;
    for (let i = 1; i < midpoint; i++) {
      
      currNode = currNode.next;
    }
    after = currNode.next;
    return currNode.value + ' & ' + after.value;
  }

  if (length % 2 === 1) {
    midpoint = Math.round(length/2);
    for (let i = 1; i < midpoint; i++) {
      currNode = currNode.next;
    }
    return currNode.value;
  }

}

console.log('middle elements of list: ', middleOfList(testList));

//8 - Cycle in a list
function cycle(node) {
  let checker = {};
  while (node.next) {
    if(checker[node.value]) {
      return true;
    } else checker[node.value] = true;
    node = node.next;
  }
  return false;
}

let nodeA = new _Node('A', 'B');
let nodeB = nodeA.next = new _Node('B', 'C');
let nodeC = nodeB.next = new _Node('C', 'D');
let nodeD = nodeC.next = new _Node('D', 'E');
let nodeE = nodeD.next = new _Node('E', 'B');
nodeE.next = nodeA;

console.log('Does it cycle? ', cycle(nodeA));

//9 - Doubly linked list

// add: Aquaria, Caprica, Gemenon, Picon, Sagittaron
// add: Tauran
// remove: Picon
let dubL = new DLL();
function dub() {
  dubL.insertFirst('Aquaria');
  dubL.insertLast('Caprica');
  dubL.insertLast('Gemenon');
  // dubL.insertLast('Picon');
  // dubL.insertLast('Sagittaron');
  dubL.insertAfter('Tauron', 'Caprica');
  // dubL.remove('Picon');
  return dubL;
}

let testDBL = dub();

//10 - Reverse a DLL

function reverseDbl(node) {
  if(node === null){
    return null;
  } 
  let temp = node.next;
  node.next = node.prev;
  node.prev = temp;

  if (node.prev === null) {
    return node;
  }

  let reverseList = reverseDbl(node.prev);
  return reverseList;
}

let reversed = reverseDbl(testDBL.head);

function displayDbl(head) {
  let currNode = head;
  while(currNode.next !== null) {
    console.log('Node Contains: ', currNode.value);
    currNode = currNode.next;
  }
  console.log('Node Contains: ', currNode.value);
  console.log('End of list.');
}

displayDbl(reversed);

