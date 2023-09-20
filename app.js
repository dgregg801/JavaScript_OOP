console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    name
    pets
    residence
    hobbies
    
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
   
    addHobby() {
        //add the hobby to the object's hobbies array
    }

    removeHobby(hobbyToRemove) {
        //remove the hobby from the objects hobbies array
        for (let i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] == hobbyToRemove) {
                this.hobbies.splice(i, 1);
                break;
            }
        }

        this.hobbies = this.hobbies.filter((element) => {
            if (element != hobbyToRemove) {
                return true;
            } else {
                return false;
            }
        })
    }


    greeting() {
        console.log("Hello fellow person");
    }
}

const person = new Person("Sirius Black", ["cat"], "Grimmold Place", ["sulks", "advises", "inspires", "hounds"]);

console.log(person);
person.removeHobby("inspires");
console.log(person);


console.log("EXERCISE 2:\n==========\n");
//Exercise 2
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer";
    }
  
    greeting() {
      console.log("Hello fellow coder!");
    }
  }
  
  const coder = new Coder("Bob", 0, "San Francisco", ["Coding", "Gaming"]);
  console.log(coder);
  coder.greeting();


console.log("EXERCISE 3:\n==========\n");
//Exercise 3
//Done above


console.log("EXERCISE 4:\n==========\n"); 
//Exercise 4

class Calculator {
    constructor () {
        this.result = 0;
        
    }
    
        add(a, b) {
        if (b  == undefined) {
            this.result = this.result + a;
        } else {
            this.result = a + b;
        } 
        return this.result;
    
    }


    subtract (a, b) {
        if (b  == undefined) {
            this.result = this.result - a;
        } else {
            this.result = a - b;
        } 
        return this.result;
        
        
    }

    multiply (a, b) {
        if (b  == undefined) {
            this.result = this.result * a;
        } else {
            this.result = a * b;
        } 
        return this.result;
    }

    divide (a, b) {
        if (b  == undefined) {
            this.result = this.result / a;
        } else {
            this.result = a / b;
        } 
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}
const calc = new Calculator();
calc.add(6, 8);
calc.displayResult();
calc.subtract(4, 8);
calc.displayResult();
calc.multiply(3, 3);
calc.displayResult();
calc.divide(7, 7);
calc.displayResult();