// Superclass
function Conta(agencyNumber, accountNumber, balance) {
  this.agencyNumber = agencyNumber;
  this.accountNumber = accountNumber;
  this.balance = balance;
};

Conta.prototype.withdraw = function(value) {
  if (this.balance < value) {
    this.getBalance();
    return;
  };

 this.balance -= value;
 this.getBalance();
};

Conta.prototype.deposit = function(value) {
  this.balance += value;
  this.getBalance();
};

Conta.prototype.getBalance = function() {
  console.log(`Ag: ${this.agencyNumber}/${this.accountNumber}: R$ ${this.balance}`);
};

// Values
function CC()