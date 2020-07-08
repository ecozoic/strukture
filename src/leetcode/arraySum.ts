// Brute Force
// Time O(n2)
// Space O(1)
const addToK = (array: Array<number>, k: number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === k) {
        return true;
      }
    }
  }

  return false;
};

// Hash
// Time - O(n)
// Space  - O(n)
const addToK2 = (array: Array<number>, k: number) => {
  const visited = new Set();
  let found = false;

  array.forEach((num) => {
    const target = k - num;

    if (visited.has(target)) {
      found = true;
    } else {
      visited.add(num);
    }
  });

  return found;
};

// Pointers
// Time - O(n)
// Space - O(1)
const addToK3 = (array: Array<number>, k: number) => {
  array.sort((first, second) => {
    if (first < second) {
      return -1;
    } else if (second < first) {
      return 1;
    } else {
      return 0;
    }
  });

  let front = 0;
  let rear = array.length - 1;
  let found = false;

  while (rear > front) {
    const sum = array[front] + array[rear];

    if (sum === k) {
      found = true;
      break;
    } else if (sum < k) {
      front++;
    } else {
      rear--;
    }
  }

  return found;
};

console.log(addToK([10, 15, 3, 7], 17));
console.log(addToK2([10, 15, 3, 7], 17));
console.log(addToK3([10, 15, 3, 7], 17));

// TODO: variation w/ two arrays
