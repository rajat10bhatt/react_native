class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }

    add(val) {
        super.add(val)
        console.log(`added ${val} to the set`)
    }

    toArray() {
        return Array.from(this)
    }

    reset() {
        return new MySet(this.originalArray)
    }
}

let mySet = new MySet([1,2,3,4,5])

mySet.add(6)
mySet.add(7)

console.log(mySet.toArray())

mySet = mySet.reset()
console.log(mySet)