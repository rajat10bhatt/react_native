// Define a generator with * before function name
// generator can return multiple values from the function the keyword used for that is 'yield'
// Generator is in pause states till the time its .next() is not called and execution id finished when return is executed 
// Finished state is denoted by {value: ..., done: true} in .next() object

function* sayHigenerator() {
    yield 'Hello'
    yield 'World!'
    return 'World!'
}

const resultGenerator = sayHigenerator()
console.log(resultGenerator.next())
console.log(resultGenerator.next())

const resultGeneratorForOf = sayHigenerator()

// This loop will iterate through all the yield values
for (const iterator of resultGeneratorForOf) {
    console.log(iterator)
}

function* newgenrator() {
    yield 'Hello'
    const final = yield 'Give me a value from outside'
    return final 
}

const valuesGenerator = newgenrator() 

console.log(valuesGenerator.next())
console.log(valuesGenerator.next())
// Give yield vlaue once the yield statement getting the value is executed from above next()
console.log(valuesGenerator.next('Final value'))

// Watcher Saga -> actions -> worker saga
// Watcher saga watching for action HELLO to be called once called it passes it to worker saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga)
}

// Worker saga dispatch action from put
function* workerSaga() {
    yield put({type: 'ACTION_FROM_WORKER'})
}

// Even if the login action is called 10 times this will login just once 
function* takeEffect() {
    yield take('LOGIN')
    yield call(workerSaga)
    // I can use as many effects as I want after this as and in saga next action will only be called if the earlier actions are called
    // As in this example LOGOUT wont be called till the saga does not receive LOGIN action
    yield take('LOGOUT')
}

// To select something from your state
const getPage = state => state.nextPage
function* selectEffect() {
    // This takes a function to select the state
    const pageNo = yield select(getPage)
}