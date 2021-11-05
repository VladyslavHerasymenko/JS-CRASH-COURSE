// #1

const person = {
    name: '-',
    greeting() {
        console.log('Hi my name is', this.name + '!');
    }
}
person.isHuman = false;
console.log(person);

// #2

const Vlad = Object.create(person);
Vlad.isHuman = true;
Vlad.name = 'Vlad';
Vlad['age'] = '23';
console.log(Vlad);
Vlad.greeting();

// #3

const myCar = new Object();
myCar.model = 'Dodge';
myCar.yearOfManufacture = '1995';
console.log('Car model -', myCar.model);

// #4

const newCar = Object.assign(myCar);
newCar['yearOfManufacture'] = 2015;
console.log('New car manufacture year -', newCar.yearOfManufacture);

// #5

const pet = {};
pet.kind = 'Dog';
if (!pet.hasOwnProperty('name')) {
    pet.name = 'Jimmy';
}
if (pet.kind === 'Dog') {
    pet.bark = () => console.log('Bark!');
}
console.log(pet.name, 'is a', pet.kind);
pet.bark();

// #6

const home = {
    type: 'appartment',
}
if (home.type == 'appartment') {
    home.floor = 7;
}
console.log('Apartment is on the', home.floor, 'floor.');

// #7

const university = {
    name: 'NULP',
    graduatingYear: 2019,
}
if (university.graduatingYear <= 2021) {
    university.status = 'Successfully graduated!';
} else {
    university.status = 'Busy studying...';
}
console.log(university.status);

// #8

const musicBand = {
    name: "Led Zeppelin",
    membersNumber: 4,
    foundationYear: 1968,
    breakupYear: 1980,
}
musicBand.activityYears = musicBand.breakupYear - musicBand.foundationYear;
console.log('Band', musicBand.name, 'was active for', musicBand.activityYears, 'years.');

// #9

const musicInstrument = {
    type: 'Guitar',
    model: 'Fender',
    color: 'Orange',
    country: 'USA',
    yearOfManufacture: 2019,
}
if (musicInstrument.yearOfManufacture >= 2015) {
    musicInstrument.toolCondition = 'new';
} else {
    musicInstrument.toolCondition = 'used';
}
console.log('Instrunemt is', musicInstrument.yearOfManufacture, 'year of manufacture and his condition is', musicInstrument.toolCondition + '.');

// #10

const laptop = {
    brand: 'Lenovo',
    model: 'Legion',
    version: 5,
    yearOfManufacture: 2019,
    deviceCondition: 'used',
    priceOfNew: 1000,
}
if (laptop.yearOfManufacture <= 2020 && laptop.deviceCondition == 'used') {
    laptop.sellPrice = laptop.priceOfNew * 0.8;
}
console.log('Sell price of the laptop is', laptop.sellPrice + '$');