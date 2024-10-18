class Animal {
  constructor(name){
    this.name = name;
  }
}

class User extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const dave = new User('jjy', 30);

console.log(dave.name, dave.age);