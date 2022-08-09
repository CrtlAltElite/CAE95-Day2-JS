// Date in JS

let day = new Date();
console.log(day);
day = day.getDay();
console.log(day);

// 0 is Sunday
// 6 is Satuday
let literalDay=new Date().toString()
console.log(literalDay)
console.log(literalDay.split(' '))
literalDay = literalDay.split(' ')[0]
console.log(literalDay)

day =4
switch(day){
    case 0:
        console.log('Go To Church');
        break;
    case 1:
        console.log("Write Code... its Monday Madness");
        break;
    case 2:
        console.log("Testing Tuesday so go Test some code")
        break;
    case 3: 
        console.log("Testing more code because its HUMppp Dayy!!!!")
        break;
    case 4:
        console.log("Write a feature for our app on Thursday")
        break;
    case 5:
        console.log("Test Feature for Feature Friday!")
        break;
    case 6:
        console.log("Sleeep all day")
        break;
    default:
        console.log('You are making up days!')
}

switch(literalDay){
    case 'Sun':
        console.log('Go To Church');
        break;
    case 'Mon':
        console.log("Write Code... its Monday Madness");
        break;
    case 'Tue':
        console.log("Testing Tuesday so go Test some code")
        break;
    case 'Wed': 
        console.log("Testing more code because its HUMppp Dayy!!!!")
        break;
    case 'Thu':
        console.log("Write a feature for our app on Thursday")
        break;
    case 'Fri':
        console.log("Test Feature for Feature Friday!")
        break;
    case 'Sat':
        console.log("Sleeep all day")
        break;
    default:
        console.log('You are making up days!')
}