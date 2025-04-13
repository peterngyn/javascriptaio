class Cat {
  static species = "Felis catus";
  #isSleeping;
  paws = 4;
  sounds = "meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }

  static herd() {
    throw new Error(`You can't do that.`);
  }
  play() {
    console.log(`Playing with ${this.favoriteToy}.`);
    this.#takeNap();
  }

  #takeNap() {
    this.#isSleeping = true;
  }
}

const cat1 = new Cat("Regulus", "fist");
const cat2 = new Cat("Sirius", "lasers");

class ShortHair extends Cat {
  fur = "short";

  constructor(name, favoriteToy) {
    super(name, favoriteToy);
  }
}

const cat3 = new ShortHair("Murray", "keyboard");
