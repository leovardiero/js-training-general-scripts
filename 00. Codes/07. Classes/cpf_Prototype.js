function CheckCPF(inputCpf) {
  Object.defineProperty(this, 'cleanCPF', {
    // Getter
    enumerable: true,
    get: function() {
      return inputCpf.replace(/\D+/g, '');
    }
  });
}

CheckCPF.prototype.check = function() {
  if (typeof this.cleanCPF === 'undefined') return false;
  if (this.cleanCPF.length !== 11) return false;  
  if (this.isSequential()) return false;

  const cpfRadical = this.cleanCPF.slice(0, -2);


  // New CPF Calculation
  const digit1 = this.getDigit(cpfRadical);
  const digit2 = this.getDigit(cpfRadical + digit1);
  const newCPF = cpfRadical + digit1 + digit2;

  return (newCPF === this.cleanCPF);
};

CheckCPF.prototype.getDigit = function(cpfRadical) {
  const cpfArray = Array.from(cpfRadical);

  let regressiveMultiplier = cpfArray.length + 1;
  // Digit 1 Calculation
  const sum = cpfArray.reduce((acc, actualValue, index) => {
    acc += Number(actualValue) * (regressiveMultiplier - index); 
    return acc}, 
    0);
  
  const rawCount = 11 - (sum % 11)
  const digit = rawCount > 9 ? 0 : rawCount;
  return String(digit);
}

CheckCPF.prototype.isSequential = function() {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  return sequence === this.cleanCPF;
}

const cpf = new CheckCPF('124.374.036-12');
console.log(cpf)