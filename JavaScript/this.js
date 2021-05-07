const person = {
    name: 'Rajat Bhatt',
    greet: function () { console.log('Hi,', this.name) }
}

person.greet()

const greet = person.greet
// This will print undefined as this refers to const greet which does not have name
greet()

const friend = {
    name: 'Rachit'
}

friend.greet = person.greet
friend.greet()

const greet1 = person.greet.bind({name: 'This is a bind object'})
// Greet1 will call the name that is bind to it with 'this'
greet1() 

// call and apply does not create a function they call the function directly as below:
person.greet.call({name: "Call name"})
person.greet.apply({name: 'Apply name'})

// Arrow function does not take this of the object it is defined in. 'this' in the following arrow 
// function will print undefined. this in the case of arrow fn is global object instead of current
const person1 = {
    name: 'Raman',
    greet: () => { console.log('Hi, ' + this.name)}
}

person1.greet()