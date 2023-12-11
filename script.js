function mincost(arr) {
  // Create a min heap with the given array
  const h = new minHeap(arr);
  let total = 0;

  // Continue until there is only one rope left in the heap
  while (h.length > 1) {
    // Extract the two smallest ropes
    let a = h.extractMin();
    let b = h.extractMin();
    let sum = a + b;

    // Add the sum to the total cost
    total += sum;

    // Insert the new rope (sum) back into the heap
    h.insert(sum);
  }

  // Add the length of the last remaining rope to the total cost
  total += h.extractMin();

  return total;
}

class minHeap {
  constructor(arr) {
    this.heap = [...arr]; // Copy the array to initialize the heap
  }

  // Extract the minimum element from the heap
  extractMin() {
    this.heap.sort((x, y) => x - y);
    return this.heap.pop();
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);
  }

  // Get the current minimum element without removing it
  findMin() {
    this.heap.sort((x, y) => x - y);
    return this.heap[this.heap.length - 1];
  }

  // Get the current length of the heap
  get length() {
    return this.heap.length;
  }
}

module.exports = mincost;

module.exports=mincost;
