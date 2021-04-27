
// Your code here
class Dog{
constructor(name,sex){
this.name = name;
this.sex = sex;
}
speak(){
  return this.name + " " +"says woof!";
}
}
const dog = new Dog("Rufio","female");
console.log(dog.speak());

class Cat{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return this.name + " " +"says meow!";
  }
}
const cat = new Cat("","female");
console.log(dog.speak());

class Bird{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if(this.sex === "male"){
    return "It's me!"+ " " +this.name + "," +" the parrot!";
  }else{
    return this.name + " " + "says" + " " + "squawk!";
  }
  }

}

const bird1 = new Bird("Pablo","male");
console.log(bird.speak());

const bird2 = new Bird("Mable","female");
console.log("Mable"+ " " +"says"+ " " + "squawk!");
