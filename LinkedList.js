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

    removeFront(){
        let removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
    }

    front(){
        if(!this.head){
            return null
        }
        
        let frontNode = this.head
        return frontNode.data
    }
}

