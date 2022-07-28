class QueueOwn {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }
    dequeue() {
        const element = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return element;
    }
    peek() {
        return this.items[this.headIndex];
    }
    get length() {
        return this.tailIndex - this.headIndex;
    }
}

const q = new QueueOwn();
q.enqueue(7);
q.enqueue(2);
q.enqueue(6);
q.enqueue(4);

console.log('length=' + q.length);
console.log(q.peek());

q.dequeue();
console.log(q.peek());
console.log('length=' + q.length);


