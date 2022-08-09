
// console.log("above timeout")
// setTimeout(()=>console.log("in the timeout"), 2000)
// console.log("below timeout")


// const func=()=>{
//     func2()
// }

// const func2=()=>{
//     func3()
// }

// const func3=()=>{
//     console.log('Hello!')
// }

// setTimeout(()=>console.log("in the timeout"), 0)
// func()

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// function doHomework(subject, callback){
//     console.log(`starting my ${subject} homework`)
//     callback()
// }

// function myCallback(){
//     console.log("I have finished my Homework... Time for some beer")
// }

// doHomework("javascipt",myCallback)

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// Promises
// const isEvenNumber = (num)=>{
//     return new Promise((resolve, reject)=>{
//         if(num%2==0){
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     })
// }

// isEvenNumber(7).then(
//     //handles the resolve
//     (result)=>{
//         console.log(`is Even Number is ${result}`)
//     }
// ).catch(
//     //handle rejection
//     (error)=>{
//         console.log(`is Even Number is ${error}`)
//     }
// )
// console.log("hello")


// normal ole function
// function increaseSalary(base, increase){
//     const newSalary = base + increase
//     console.log(`Your new Salary is ${newSalary}`)
//     return newSalary
// }

// console.log(increaseSalary(30000,3000))

function slowAddition(n1,n2){
    return new Promise((resolve, reject) =>{
            setTimeout(()=>resolve(n1+n2),2000)
        }
    )
}

// async await

async function increaseSalarySlowly(base, inc){
    const newSalary = await slowAddition(base,inc)
    console.log(`Your new Salary is ${newSalary}`)
    return newSalary
}
console.log("before")

increaseSalarySlowly(30000,3000)
console.log("After")


// increaseSalarySlowly=async (base, inc)=>{
//     const newSalary = await slowAddition(base,inc)
//     console.log(`Your new Salary is ${newSalary}`)
//     return newSalary
// }