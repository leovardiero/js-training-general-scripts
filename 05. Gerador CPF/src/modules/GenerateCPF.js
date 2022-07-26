import CheckCPF from './CheckCPF'

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) +  min));
  }

  formatCPF(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)    
    )
  };

  generateNewCpf() {
    const radicalCpf = this.rand()
    const digit1 = CheckCPF.getDigit(radicalCpf)
    const digit2 = CheckCPF.getDigit(radicalCpf + digit1)
    const newCPF = radicalCpf + digit1 + digit2;
    return this.formatCPF(newCPF)
  }


}