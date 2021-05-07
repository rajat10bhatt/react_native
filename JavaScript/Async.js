function printOne() {
    console.log('one')
}

function printTwo() {
    console.log('two')
}

function printThree() {
    console.log('three')
}

// Set timeout async methods
// TimeOut of 1000 milliSecond i.e 1 sec
setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree