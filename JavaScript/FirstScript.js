// Constants
const firstName = "Rajat"
const lastName = 'Bhatt'

const age = 26

// console.log(firstName + " " + lastName + " " + age)

// Array and looping
const array = [
    "string",
    42,
    function hello() { console.log("Execute function") }
]

// array[2]()

for (let i = 0; i<array.length; i++) {
    // console.log(array[i])
}

// console.log(typeof age)

// Create a new object
const objc = new Object()
objc.firstName = "Rajat"
objc.lastName = 'Bhatt'
objc.isTeaching = false
objc.greet = function() { console.log('Namastey!') }

// Other way to create a new object without new keyword
const objc2 = {}
objc2.firstName = "Rajat"
objc2['lastName'] = 'Bhatt'
objc['isTeaching'] = false
objc['greet'] = function() { console.log('Namastey!') }

// Other way of creating an object, left side or key is automatically casted to string
const objc3  = {
    firstName: 'Rajat',
    lastname: 'Bhatt',
    isTeaching: false,
    greet: function() { console.log('Namastey!') },
    address: {
        houseNo: '45',
        street: 'Agency Chowk',
        city: 'Pauri',
        state: 'Uttarakhand',
        pincode: '246001'
    }
}

// console.log(objc3.address)
// console.log(objc['firstName'])

// Create a new object than pointing to a reference, so if any value is changed in objc3 it wont effect objc4 and vice-versa, but this won't effect the sub object as in this case address this is called shallow copy
const objc4 = Object.assign({}, objc3)

// Deep copy the object
function deepCopy(obj) {
    const keys = Object.keys(obj)
    const newObject = {}
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const objc5 = deepCopy(objc3)
objc3.address.pincode = "411028"
// console.log(objc5.address.pincode)

// To get all the methods associated to a type
const arr = ["val1", "val2"]
console.log(arr.__proto__) // Won't print in terminal but can be done in google chrome
