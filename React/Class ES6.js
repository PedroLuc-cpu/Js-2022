class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

  /*
  O super()método se refere à classe pai.

Ao chamar o super()método no método construtor, chamamos o método construtor do pai e obtemos acesso às propriedades e métodos do pai.*/