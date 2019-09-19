
function unshiftArray(arr, element) {
  for(let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = element;
}

function pushArray(arr, element) {
  arr[arr.length] = element;
}