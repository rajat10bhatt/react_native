function map(array, fn) {
    const newArray = []
    array.forEach(function(val) {
        newArray.push(fn(val))
    })
    return newArray
}

function addOne(val) {
    return val + 1
}

const array = [0,1,2,3]

console.log(map(array, addOne))