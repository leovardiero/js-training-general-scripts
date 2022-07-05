/*************************************************
 *                                         AULA 01
 ************************************************/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar () {
    console.log(`${this.nome} esta falando`);
  }

  beber () {
    console.log(`${this.nome} esta bebendo`);
  }

  comer () {
    console.log(`${this.nome} esta comendo`);
  }
}

const p1 = new Pessoa('Leo', 'Vardiero');
// console.log(p1);

/*************************************************
 *                                         AULA 02
 ************************************************/

const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome
    this[_velocidade] = 0
  };

  // GETTER
  get velocidade() {
    return this[_velocidade];
  }

  // SETTER
  set velocidade(valor) {
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  // METHODS
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  };

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  };
};

const c1 = new Carro('Fusca');

for(let i = 0; i<=200; i++) {
  c1.acelerar();
};

c1.velocidade = 99;

console.log(c1)
console.log(c1.velocidade);