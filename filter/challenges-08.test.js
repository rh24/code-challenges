// STRETCH GOAL: Write your own filter function

const myFilter = (arr, cb) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentVal = cb(arr[i]);
    if (currentVal) {
      newArr.push(currentVal);
    }
  }

  return newArr;
}

const isEven = (n) => {
  if (n % 2 === 0) { return n; }
}

console.log(myFilter([2, 3, 4, 5, 6, 7, 8, 9, 10], isEven));