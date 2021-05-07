function makeFunctionArray() {
    const arr = []

    for(var i = 0; i < 5; i++) {
        arr.push(function () { console.log(i) }) 
    }

    return arr
}

const functionArray = makeFunctionArray() 

// Prints 5 instead of 0 because of var as var scope is in the merhod makeFunctionArray so
//after the loop is executed the final value of i is 5 which is there because the value is shadowed 
functionArray[0]()

// Closure example
function makeHelloFunction() {
    var message = "Hello!"

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

// const sayHello = makeHelloFunction()
// console.log("Type of message:", typeof message)
// console.log(sayHello.toString())

// sayHello()

// Immediately invoked function expression (IIFE)
const sayHi = (function () {
    var hiMessage = "Hi!"

    function sayHi() {
        console.log(hiMessage)
    }

    return sayHi
})()

console.log(sayHi.toString())
sayHi()

// IIFE usage
// Suppose we have a number we want to increment but we dont want it to be accessible from outside
const counter = (function () {
    let count = 0
    return {
        inc: function () { count += 1 },
        get: function () { console.log(count) }
    }
})()

// counter.get()
// counter.inc()
// counter.get()
// counter.inc()
// counter.get()

// Make the above array example IFFE
function makeFunctionArray1() {
    const arr = []

    for(var i = 0; i < 5; i++) {
        arr.push((function (x) { 
            return function () { console.log(x) } 
        })(i)) 
    }

    return arr
}

const arrayFunctions = makeFunctionArray1()
arrayFunctions[1]()

// Map
const x = [1,2,3,4]
x.map(function (number) { return number + 1 })
console.log(x)

// Filter
const y = x.filter(function (number) { return (number % 2) === 0  })
console.log(y)

// Reduce
const sum = x.reduce(function (sum, number) { return sum + number })
console.log(sum)