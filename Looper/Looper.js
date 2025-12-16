function generate() {
  let n = Number(document.getElementById("num").value);
  let output = document.getElementById("output");

  output.innerHTML = "";

  
  if (isNaN(n) || n <= 0) {
    output.innerHTML = " Please enter a valid number";
    return;
  }

  let allNumbers = [];
  let evenNumbers = [];
  let oddNumbers = [];

  
  for (let i = 1; i <= n; i++) {
    allNumbers.push(i);

    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }

  
  output.innerHTML += `<p><b>All Numbers:</b> ${allNumbers.join(", ")}</p>`;
  output.innerHTML += `<p><b>Even Numbers:</b> ${evenNumbers.join(", ")}</p>`;
  output.innerHTML += `<p><b>Odd Numbers:</b> ${oddNumbers.join(", ")}</p>`;
}
