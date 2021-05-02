// Your code here

 class Cat {
     constructor(name, sex) {
     this.name = name;
      this.sex = sex;


      }

     speak() {

   return this.name + " " +"says meow!";
   let cat = new Cat("Sasha", "female")
   speak.cat();
      }

   }



  class Dog {
      constructor(name, sex) {
      this.name = name;
       this.sex = sex;


       }

      speak() {

    return this.name + " " +"says woof!";
    let dog = new Dog("Sasha", "female")
    speak.dog();
       }

    }



class Bird {
  constructor(name,sex) {
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if (this.sex === "male") {
    return "It's me!"+" "+this.name + "," + " the parrot!"
      const bird = new Bird("Pablo", "male")
  }else {
        return this.name + " " + "says" + " " +"squawk!";
          const  bird2 = new Bird("Mable", "female")
  }
  }
}
