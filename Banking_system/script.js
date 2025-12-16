let accounts = [];


function createAccount(name, initialDeposit) {
  const accountNumber = accounts.length + 1;
  const newAccount = {
    accountNumber,
    name,
    balance: Number(initialDeposit),
  };
  accounts.push(newAccount);
  return `Account created successfully! Account Number: ${accountNumber}`;
}

function displayAccount(accountNumber) {
  const account = accounts.find(
    (acc) => acc.accountNumber === Number(accountNumber)
  );
  if (account) {
    return `Account Number: ${account.accountNumber}\nName: ${account.name}\nBalance: ${account.balance}`;
  } else {
    return "Account not found!";
  }
}

function deposit(accountNumber, amount) {
  const account = accounts.find(
    (acc) => acc.accountNumber === Number(accountNumber)
  );
  if (account) {
    account.balance += Number(amount);
    return `Deposit successful! New Balance: ${account.balance}`;
  } else {
    return "Account not found!";
  }
}


function withdraw(accountNumber, amount) {
  const account = accounts.find(
    (acc) => acc.accountNumber === Number(accountNumber)
  );
  if (account) {
    if (account.balance >= Number(amount)) {
      account.balance -= Number(amount);
      return `Withdrawal successful! New Balance: ${account.balance}`;
    } else {
      return "Insufficient balance!";
    }
  } else {
    return "Account not found!";
  }
}


function transfer(fromAcc, toAcc, amount) {
  const fromAccount = accounts.find(
    (acc) => acc.accountNumber === Number(fromAcc)
  );
  const toAccount = accounts.find((acc) => acc.accountNumber === Number(toAcc));

  if (!fromAccount || !toAccount) {
    return "Invalid account number(s)!";
  }

  if (fromAccount.balance >= Number(amount)) {
    fromAccount.balance -= Number(amount);
    toAccount.balance += Number(amount);
    return "Transfer successful!";
  } else {
    return "Insufficient balance!";
  }
}


function handleCreate() {
  const name = document.getElementById("createName").value;
  const deposit = document.getElementById("createDeposit").value;
  const output = createAccount(name, deposit);
  document.getElementById("createOutput").innerText = output;
}

function handleDisplay() {
  const accNo = document.getElementById("displayAccountNo").value;
  const output = displayAccount(accNo);
  document.getElementById("displayOutput").innerText = output;
}

function handleDeposit() {
  const accNo = document.getElementById("depositAccountNo").value;
  const amount = document.getElementById("depositAmount").value;
  const output = deposit(accNo, amount);
  document.getElementById("depositOutput").innerText = output;
}

function handleWithdraw() {
  const accNo = document.getElementById("withdrawAccountNo").value;
  const amount = document.getElementById("withdrawAmount").value;
  const output = withdraw(accNo, amount);
  document.getElementById("withdrawOutput").innerText = output;
}

