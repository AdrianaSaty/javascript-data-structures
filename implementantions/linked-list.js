class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    indexOf(value) {
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (this.equalsFn(value, current.value)) return i;
            current = current.next;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
        } else {
            let listValues = ''
            let current = this.head
            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues)
        }
    }

    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    getElementAt(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return false;

        const newNode = new Node(value);

        if (index === 0) {
            this.unshift(value);
        } else {
            const previous = this.getElementAt(index - 1);
            newNode.next = previous.next;
            previous.next = newNode;
            this.size++;
        }
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return null;

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            const previous = this.getElementAt(index - 1);
            removedNode = previous.next;
            previous.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }

    reverse() {
        let previous = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }


}

const list = new LinkedList()
console.log('empty', list.isEmpty())
list.print()
list.push(1)
list.push(3)
console.log('empty', list.isEmpty())
list.print()
