class Set {
    constructor(arr) {
        this.arr = arr
    }

    add (val) {
        if (!this.has(val)) this.arr.push(val)
    }

    delete (val) {
        this.arr = this.arr.filter(x => x != val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }
}

const set = new Set([1, 2, 3, 4, 5])
console.log(set)

set.add(6)
console.log(set)
console.log(set.size)

set.delete(2)
console.log(set)

console.log(set.has(2))
console.log(set.has(5))