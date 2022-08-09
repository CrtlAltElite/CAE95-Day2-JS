jody = {
    name:"Jody",
    age: 95,
    favColor:"blue",
}

console.log(jody)
console.table(jody)

console.log(jody['age'])
console.log(jody.age)

let myKey="age"
console.log(jody.myKey) //NO ! ! ! !
console.log(jody[myKey])

jody.isGoodCoder=false
console.table(jody)
console.log("Send Jody to Coding Camp")
jody.isGoodCoder=true
console.table(jody)

myNewKey="hairColor"
'Dirty Blonde'
//jody.myNewKey='Dirty Blonde' // NOOO
jody[myNewKey]='Dirty Blonde'
console.table(jody)

let person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}
// print "Blue"
console.log(person2.favColor)
// print C++
console.log(person2.progLanguages[2])
// print LA Rams
console.log(person2.teams[1].football)
// print Chicage Fire
console.log(person2.teams[0].soccer[0])

// Destructuring ... we will use a ton!
shoe={
    nam:'Red Nike',
    size:11,
    color:'red'
}

const test=myObj=>{
    console.log(myObj.nam)
    console.log(myObj.size)
    console.log(myObj.color)
}

const {nam, size, color} = shoe
console.log(nam)
console.log(size)
console.log(color)

test(shoe)

const test1 = ({nam, size, color}) =>{
    console.log(nam)
    console.log(size)
    console.log(color)
}
test1(shoe)

a=[1,2,3]
const test3=([a,b,c])=>{
    console.log(a,b,c)
}

test3(a)

let person={
    firstName:"Crystal",
    lastName:"Metheny",
    nickName:"Ol' Dirty Illegitimate Child",
    age: 35,
    height:62
}

let quote = `Here I go, deep type flow, Jackques Costueau could never get this low.`

const myFunction=(quote, {firstName, lastName, nickName, age, height})=>{
    // let reply = 'Get some Gold'
    // let reply
    let reply = null
    let myObj={
    }
    console.log(quote)
    console.log(firstName)
    console.log(nickName)
    console.log(age)
    console.log(reply ?? 'buy a toothbrush')
    console.log(myObj?.id ?? 789)

}

myFunction(quote, person)


newPerson = {...person, id:187}
console.table(newPerson)


const testF =(alist)=>{        mcDonalds:        mcDonalds:"Sham-rock-shake",
"Sham-rock-shake",

    alist?.map((x)=>console.log(x)) ?? console.log('no')
}

testF([1,2,3])


const myFunc2=({firstName, lastName, ...leftOver})=>{
    console.log(firstName)
    console.log(lastName)
    console.table(leftOver)
}
myFunc2(person)


let [m,n, ...leftOver]=[1,2,34,5,7648,8567]
console.log(m,n)
console.log(leftOver)



//looping

// .keys .values .items in python
console.log(Object.keys(person2))

console.log(Object.values(person2))
console.log('================================================================')
console.log(Object.entries(person2))
console.log('================================================================')
// loop through an object .... the old ugly way.... often refered to as the Kevin Method
for(let i=0; i<Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]) // keys
    console.log(Object.values(person2)[i]) // values
    console.log(person2[Object.keys(person2)[i]]) //values same as above\   
}

console.log('================================================================')
// for in loop in JS (ES6) loop over objects
for(let key in person2){
    console.log(key)
    console.log(person2[key])
}        mcDonalds:"Sham-rock-shake",





let testArray=[1,2,3,4]
console.log(typeof testArray) //object
console.log(testArray instanceof Array) //true
console.log(Array instanceof Object) //true
console.log(Array.isArray(testArray)) //true
console.log(testArray instanceof Object) //true
console.log(typeof 'hello') //string
console.log(typeof {}) //object
console.log('hello' instanceof Object) //False
console.log(null instanceof Object) //False
console.log({key:1} instanceof Object)  //true
