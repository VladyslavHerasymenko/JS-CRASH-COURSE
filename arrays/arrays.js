// Створення масивів

const arr = [ 1, 'Hello', { A: 10, B: 20}];
const arrN = new Array();

// Доступ до елментів

console.log(arr[1]);
console.log(arr[2]);

// Додати елемент

arrN[0] = 'Some String';
console.log(arrN);
arrN[1] = 24;
console.log(arrN);

// Змінити елемент

arrN[1] = 'Hi';
console.log(arrN);

// Видалити елемент

delete arrN[0];
console.log(arrN);

// Додати до кінця .push()

arrN.push(1);
console.log(arrN);

// Видалити з кінця .pop()

arrN.pop();
console.log(arrN);

// Видалити з початку .shift()

arrN.shift();
console.log(arrN);

// Додати до початку .unshift()

arrN.unshift(225);
console.log(arrN);