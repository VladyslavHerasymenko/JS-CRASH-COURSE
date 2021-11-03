// Оператори присвоєння

let x = 23;
let y = 13;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);

// Оператори порівняння

console.log(x == y);

x = '14';
y = 14;

console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Логічні оператори

let z = 15;
let t = 20;

console.log(x == y && t > z);
console.log(x != y || t >= z);
console.log( !(x === y));
console.log(x != y ? "x != y" : "x = y");

// Умовні оператори

if (x == y) {
    console.log(x *= y);
} else {
    console.log(x **= y);
}

// swutch...case

const weekday = 5;

switch (weekday) {
    case 1: {
        console.log("It is a workday");
    }
    break;
    case 2: {
        console.log("It is a workday");
    }
    break;
    case 3: {
        console.log("It is a workday");
    }
    break;
    case 4: {
        console.log("It is a workday");
    }
    break;
    case 5: {
        console.log("It is a workday");
    }
    break;
    case 6: {
        console.log("It is a weekend");
    }
    break;
    case 7: {
        console.log("It is a weekend");
    }
    break;
    default: {
        console.log("Invalid data")
    }
}