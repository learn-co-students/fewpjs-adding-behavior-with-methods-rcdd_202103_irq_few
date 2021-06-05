// Your code here

class Animal {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  
  speak(sound) {
    return `${this.name} says ${sound}!`
  }
}

class Cat extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  
  speak() {
    return super.speak('meow')
  }
}

class Dog extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  
  speak() {
    return super.speak('woof')
  }
}

class Bird extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  
  speak() {
    if (this.sex === 'male') 
      return `It's me! ${this.name}, the parrot!`
    else
      return `${this.name} says squawk!`
  }
}