
let escalatorQueue = [];

function addPerson() {
  let name = document.getElementById("personName").value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  escalatorQueue.push(name); 
  document.getElementById("personName").value = "";
  displayEscalator();
}

function removePerson() {
  if (escalatorQueue.length === 0) {
    alert("Escalator is empty");
    return;
  }

  let removed = escalatorQueue.shift(); 
  alert(removed + " exited the escalator");
  displayEscalator();
}

function displayEscalator() {
  let escalatorDiv = document.getElementById("escalator");
  escalatorDiv.innerHTML = "";

  escalatorQueue.forEach((person) => {
    let div = document.createElement("div");
    div.className = "person";
    div.innerText = person;
    escalatorDiv.appendChild(div);
  });
}
