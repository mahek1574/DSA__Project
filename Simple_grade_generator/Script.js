function generateGrade() {
  let marksInput = document.getElementById("marks").value;
  let result = document.getElementById("result");

  if (marksInput === "") {
    result.innerText = " Please enter marks first";
    return;
  }

  let marks = Number(marksInput);

  
  if (marks < 0 || marks > 100) {
    result.innerText = " Invalid Marks";
  } else if (marks >= 90) {
    result.innerText = " Grade A";
  } else if (marks >= 75) {
    result.innerText = " Grade B";
  } else if (marks >= 50) {
    result.innerText = " Grade C";
  } else if (marks >= 33) {
    result.innerText = " Grade D";
  } else {
    result.innerText = " Grade F (Fail)";
  }
}
