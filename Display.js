class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this;
    }

    front() {
        if (!this.head) {
            return null;
        }

        let frontNode = this.head;
        return frontNode.data;
    }

    findSum(){
        let runner = this.head
        let sum = 0

        while (runner !== null){
            sum += runner.data
            runner = runner.next
        }

        return sum
    }

    display(){
        let runner = this.head

        while (runner !== null){
            console.log(runner.data)
            runner = runner.next
        }
    }
}

var mySLL = new SLL();
mySLL.addFront(5);
mySLL.addFront(10);
// console.log(mySLL.head.next);
// console.log(mySLL.front());
// console.log(mySLL.findSum())
console.log(mySLL.display())