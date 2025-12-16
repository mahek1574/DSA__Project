let products = [];


function addProduct() {
  let name = document.getElementById("name").value;
  let price = Number(document.getElementById("price").value);

  if (name === "" || price === 0) {
    alert("Please enter valid product details");
    return;
  }

  products.push({ name, price });
  displayProducts();
}

function displayProducts() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  products.forEach((p) => {
    let li = document.createElement("li");
    li.innerText = `${p.name} - ₹${p.price}`;
    list.appendChild(li);
  });
}

function sortLowToHigh() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price > products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  displayProducts();
}

function sortHighToLow() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price < products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  displayProducts();
}


function sortByName() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].name.localeCompare(products[j + 1].name) > 0) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  displayProducts();
}


function searchProduct() {
  let search = document.getElementById("search").value.toLowerCase();
  let found = products.find((p) => p.name.toLowerCase() === search);

  if (found) {
    alert(`Found: ${found.name} - ₹${found.price}`);
  } else {
    alert("Product not found");
  }
}
