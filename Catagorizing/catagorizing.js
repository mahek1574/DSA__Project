function getArray() {
  let arr = document.getElementById("arrayInput").value;
  if (!arr) return [];
  return arr.split(",").map(Number);
}

function linearSearch() {
  let arr = getArray();
  let target = Number(document.getElementById("searchValue").value);
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }

  let result =
    index !== -1
      ? `Linear Search: ${target} found at index ${index}`
      : `Linear Search: ${target} not found`;

  document.getElementById("result").innerText = result;
}

function binarySearch() {
  let arr = getArray();
  arr.sort((a, b) => a - b);
  let target = Number(document.getElementById("searchValue").value);

  let left = 0,
    right = arr.length - 1,
    index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      index = mid;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let result =
    index !== -1
      ? `Binary Search: ${target} found at index ${index} (sorted array)`
      : `Binary Search: ${target} not found`;

  document.getElementById("result").innerText = result;
}
