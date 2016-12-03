import { Node } from './node';
import { LinkedList } from './linked-list';

export const printNodeChain = (node: Node<any>) => {
    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
};

export const printLinkedList = (list: LinkedList<any>) => {
    printNodeChain(list.head);
};