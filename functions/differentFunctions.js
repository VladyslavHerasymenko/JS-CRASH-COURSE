// arrow function

const greeting1 = (name) => 'Hello ' + name;
console.log('Arrow function -', greeting1('Vlad'))
const greeting2 = (name) => {
    return 'Hello ' + name;
}
console.log('Arrow function -', greeting2('Vlad'))

// function declaration

function greeting3(name) {
    return 'Hello ' + name;
}
console.log('Function declaration -', greeting3('Vlad'))

// function expression

const greeting4 = function(name) {
    return 'Hello ' + name;
}
console.log('Function expression -', greeting4('Vlad'))

// anonymous function

const greeting5 = function(name, cb) {
    return cb(name);
}
console.log('Anonymous function -', greeting5('Vlad', greeting4))