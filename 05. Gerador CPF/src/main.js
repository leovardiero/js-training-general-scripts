import GenerateCPF from './modules/GenerateCPF'
import './assets/css/style.css';

(function() {
  const generatedCpf = document.querySelector('.generated-cpf');
  const cpf = new GenerateCPF();
  generatedCpf.innerHTML = cpf.generateNewCpf();
})();