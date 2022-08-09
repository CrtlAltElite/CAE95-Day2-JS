// ES-5 Object Prototypes

function Car(make, model, year){
    this.make=make;
    this.model=model;
    this.year=year;

    this.first_letter_model=function(){
        return this.model[0]
    }

    this.printInfo = function( color, wheels=0){
        console.log(`this is a ${this.year} ${this.make}, ${this.model}
and has ${wheels} wheels and is color ${color}`)

    }
}

const myCar = new Car('Toyota', 'Tundra', 2000)
console.table(myCar)
console.log(myCar.make)
console.log(myCar.model)

myCar.something = "something else"
console.table(myCar)
console.log(myCar.something)

myCar.year=2010
console.table(myCar)

console.log(myCar.first_letter_model())

myCar.printInfo('red')
myCar.drive = function(){console.log("VROOOOOOOMMM!!!!!!!!")}
myCar.drive()

Car.prototype.kill = "kill"
console.log(myCar.kill)

String.prototype.firstLetter=function(){return this[0]}
console.log('HappyDance'.firstLetter())


// ES-6
class Human{
    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    returnInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 25, 'Female')
console.table(wilma)
console.log(wilma.returnInfo())

// class Baby(Human):  in python

class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking   
    }

    isBabyWalking(){
        if(this.walking){
            return "Baby is walkin'"
        }else{
            return "Baby ain't walkin'"
        }
    }

    returnInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender} \nWalking:${this.walking}`
    }

}

let pebbles = new Baby('Pebbles', 1, 'Female', true);
console.table(pebbles)
console.log(pebbles.isBabyWalking())
console.log(pebbles.returnInfo())
