const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Elevador {
  constructor(capacidade) {
    this._capacidade = capacidade;
    this._andarAtual = 0;
    this._pessoas = 0;
  }

  get capacidade() {
    return this._capacidade;
  }

  get andarAtual() {
    return this._andarAtual;
  }

  get pessoas() {
    return this._pessoas;
  }

  inserePessoas() {
    if (this._pessoas < this._capacidade) {
      this._pessoas++;
      console.log(
        `Uma pessoa entrou no elevador. Total de pessoas: ${this._pessoas}`
      );
    } else {
      console.log(
        "Ops! O elevador estar lotado! Não é possível inserir mais pessoas."
      );
    }
  }

  retiraPessoas() {
    if (this._pessoas > 0) {
      this._pessoas--;
      console.log(
        `Uma pessoa saiu do elevador. Total de pessoas: ${this._pessoas}`
      );
    } else {
      console.log("Ops! Não há pessoas no elevador para retirar.");
    }
  }

  sobe() {
    this._andarAtual++;
    console.log(`O elevador subiu para o andar ${this._andarAtual}`);
  }

  desce() {
    if (this._andarAtual > 0) {
      this._andarAtual--;
      console.log(`Elevador desceu para o andar ${this._andarAtual}`);
    } else {
      console.log("Ops! O elevador já está no andar 0, não pode descer mais.");
    }
  }

  confereCapacidade() {
    console.log(`Capacidade do elevador: ${this._capacidade}`);
  }

  conferePessoas() {
    console.log(`Número de pessoas no elevador: ${this._pessoas}`);
  }
}

class SistemaElevadores {
  constructor() {
    this.elevadores = [];
  }

  criaElevador() {
    rl.question(
      "Por favor informe a capacidade do elevador: ",
      (capacidade) => {
        capacidade = parseInt(capacidade);
        const novoElevador = new Elevador(capacidade);
        this.elevadores.push(novoElevador);
        console.log("Um novo elevador foi criado!");
        this.menu();
      }
    );
  }

  inserePessoas() {
    rl.question(
      "Escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].inserePessoas();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  retiraPessoas() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].retiraPessoas();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  confereCapacidade() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].confereCapacidade();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  conferePessoas() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].conferePessoas();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  sobeElevador() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].sobe();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  desceElevador() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          this.elevadores[indice].desce();
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }

  menu() {
    console.log("\nMenu de Opções:");
    console.log("1. Criar novo elevador");
    console.log("2. Inserir pessoa em um elevador");
    console.log("3. Retirar pessoa de um elevador");
    console.log("4. Conferir a capacidade de um elevador");
    console.log("5. Conferir o total de pessoas que estão no elevador");
    console.log("6. Fazer o elevador sobe um andar");
    console.log("7. Fazer o elevador desce um andar");
    console.log("8. Verificar em qual andar o elevador se encontra");
    console.log("9. Sair do sistema");

    rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          this.criaElevador();
          break;
        case "2":
          this.inserePessoas();
          break;
        case "3":
          this.retiraPessoas();
          break;
        case "4":
          this.confereCapacidade();
          break;
        case "5":
          this.conferePessoas();
          break;
        case "6":
          this.sobeElevador();
          break;
        case "7":
          this.desceElevador();
          break;
        case "8":
          this.verificaAndar();
          break;
        case "9":
          console.log("Saindo do sistema...");
          rl.close();
          break;
        default:
          console.log("Ops! Opção inválida.");
          this.menu();
          break;
      }
    });
  }

  verificaAndar() {
    rl.question(
      "Por favor escolha o número do elevador (0 para o primeiro, 1 para o segundo, etc.): ",
      (indice) => {
        indice = parseInt(indice);
        if (this.elevadores[indice]) {
          console.log(
            `Elevador está no andar ${this.elevadores[indice].andarAtual}`
          );
        } else {
          console.log("Ops! O elevador não foi encontrado.");
        }
        this.menu();
      }
    );
  }
}

const sistema = new SistemaElevadores();
sistema.menu();
