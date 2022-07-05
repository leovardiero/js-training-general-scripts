class CheckCPF {
  constructor(inputCPF) {
    Object.defineProperty(this, 'cleanCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: inputCPF.replace(/\D+/g, '')
    })
  }

  isSequence() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

  getDigit(cpfBase) {
    const cpfArray = Array.from(cpfBase)
    let regressiveMultiplier = cpfArray.length + 1;

    const sum = cpfArray.reduce((acc, actualValue, index) => {
      acc += Number(actualValue) * (regressiveMultiplier - index)
      return acc},
      0);

    const rawCount = 11 - (sum % 11)
    return String(rawCount > 9 ? 0 : rawCount)
  }

  isValidCPF() {
    const cpfBase = this.cleanCPF.slice(0, -2)
    const digito1 = this.getDigit(cpfBase)
    const digito2 = this.getDigit(cpfBase + digito1)
    const validCPF = cpfBase + digito1 + digito2
    return (validCPF === this.cleanCPF)
  }

  checkCpf() {
    // CPF VALIDATIONS
    if(!this.cleanCPF) return false;
    if(typeof this.cleanCPF !== 'string') return false;
    if(this.cleanCPF.length !== 11) return false;
    if(this.isSequence()) return false;
    return this.isValidCPF();
  }
};

const cpfChecker1 = new CheckCPF('12437403612');

console.log(cpfChecker1.checkCpf());