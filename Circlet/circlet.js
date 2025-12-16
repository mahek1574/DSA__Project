let n = 4; 
let symbol = "*"; 

for (let i = 0; i < n; i++) {
  let str = "";

  
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }

  
  for (let k = 0; k < 2 * i + 1; k++) {
    if (k === 0 || k === 2 * i) str += symbol;
    else str += " ";
  }

  console.log(str);
}
for (let i = n - 2; i >= 0; i--) {
  let str = "";

  for (let j = 0; j < n - i; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    if (k === 0 || k === 2 * i) str += symbol;
    else str += " ";
  }

  console.log(str);
}
