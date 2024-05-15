class PriorityNode {
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.head = null;
    }
  
    insert(data, priority) {
      const newNode = new PriorityNode(data, priority);
  
      if (!this.head || priority > this.head.priority) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && current.next.priority >= priority) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(`Data: ${current.data}, Priority: ${current.priority}`);
        current = current.next;
      }
    }
  
    dequeue() {
      if (!this.head) return null;
      const removedData = this.head.data;
      this.head = this.head.next;
      return removedData;
    }
  }
  
  const pq = new PriorityQueue();
  pq.insert('Task 1', 1);
  pq.insert('Task 3', 3);
  pq.insert('Task 2', 2);
  pq.printList(); 
  
  const highestPriorityTask = pq.dequeue();
  console.log(`Task with highest priority removed: ${highestPriorityTask}`);
  pq.printList(); 