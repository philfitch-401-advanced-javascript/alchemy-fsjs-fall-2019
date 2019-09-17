


function reverse(arr) {
  const reversed = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    reversed[reversed.length] = arr[i];
  }

  return reversed;
}

function reverse2(arr) {

  for(let i = 0; i < (arr.length / 2); i++) {
    const temp = arr[i];
    const otherIndex = arr.length - i - 1;
    arr[i] = arr[otherIndex];
    arr[otherIndex] = temp;
  }

  return arr;
}