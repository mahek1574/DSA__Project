let input = "";

function press(key) {
  if (key === "C") {
    input = "";
    updateDisplay("0");
  } else if (key === "=") {
    if (input === "") {
      updateDisplay("0");
      return;
    }
    let result = calculate(input);

    updateDisplay(result);
  } else {
    input += key;
    updateDisplay(input);
  }
}

function updateDisplay(val) {
  document.getElementById("display").value = val;
}

function calculate(exp) {
  let numbers = [];
  let operators = [];
  let temp = "";

  for (let i = 0; i < exp.length; i++) {
    if ("0123456789".includes(exp[i])) {
      temp += exp[i];
    } else if ("+-*/".includes(exp[i])) {
      numbers.push(Number(temp));
      operators.push(exp[i]);
      temp = "";
    } else {
      alert("Invalid character!");
      return 0;
    }
  }
  numbers.push(Number(temp));


  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*") {
      numbers[i] = numbers[i] * numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === "/") {
      numbers[i] = numbers[i] / numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }

  
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") result += numbers[i + 1];
    else if (operators[i] === "-") result -= numbers[i + 1];
  }

  return result;
}
