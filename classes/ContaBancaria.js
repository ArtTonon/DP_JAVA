//crie a classe ContaBancaria com metodos para depositar(valor): Realiza 
//um deposito na conta e registra a transação no historico, sacar(valor): 
//Realiza um saque na conta, desde que haja saldo suficiente, e registra a 
//transação no historico, exibirSaldo(): Atualiza um elemento HTML(por exemplo, 
//uma <span>) com o saldo atual, exibirHistorico(): Atualiza um elemento HTML(por 
//exemplo, uma <ul>) com o historico de transações. Utilize formulario o que achar melhor para manipular e mostrar as informações.

  class ContaBancaria {
    constructor() {
      this.saldo = 0.00;
      this.historico = [];
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        this.historico.push(`Depósito de R$ ${valor.toFixed(2)}`);
        this.atualizarSaldo();
        this.atualizarHistorico();
      } else {
        console.log('Valor inválido.');
      }
    }
  
    sacar(valor) {
      if (valor > 0 && this.saldo >= valor) {
        this.saldo -= valor;
        this.historico.push(`Saque de R$ ${valor.toFixed(2)}`);
        this.atualizarSaldo();
        this.atualizarHistorico();
      } else {
        console.log('Valor inválido ou saldo insuficiente.');
      }
    }
  
    atualizarSaldo() {
      document.getElementById('saldo').innerText = this.saldo.toFixed(2);
    }
  
    atualizarHistorico() {
      const historico = document.getElementById('historico');
      historico.innerHTML = '';
      this.historico.forEach((transacao, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${transacao}`;
        historico.appendChild(li);
      });
    }
  }
  
  const conta = new ContaBancaria();
  
  document.getElementById('form-deposito').addEventListener('submit', (event) => {
    event.preventDefault();
    const valor = parseFloat(document.getElementById('valor-deposito').value);
    conta.depositar(valor);
  });
  
  document.getElementById('form-saque').addEventListener('submit', (event) => {
    event.preventDefault();
    const valor = parseFloat(document.getElementById('valor-saque').value);
    conta.sacar(valor);
  });