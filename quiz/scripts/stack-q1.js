class PStack {
  #id;
   #_persons;
  constructor() {
    this.#id = 1;
    this.#_persons = [];
  }

  showId() {
    return this.#id;
  }
  
    get persons() {
    return this.#_persons;
  }

  set persons(value) {
    // Assuming you want to replace the entire array with a new one
    this.#_persons = value;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this.persons.push(p)
  }

  pop() {
    return this.persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());

console.log(pstack.persons);
