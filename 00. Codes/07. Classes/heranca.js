class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  };

  // Methods
  ligar() {
    if(this.ligado) return;
    this.ligado = true;
  };

  desligar() {
    if(!this.ligado) return;
    this.ligado = false;
  };
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  };
}

const s1 = new Smartphone('iPhone', 'preto', '12s');

console.log(s1);