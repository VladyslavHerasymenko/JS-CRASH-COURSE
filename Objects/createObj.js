const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};
const DC = {
    yearCreation: 2013,
    mainCharacters: 'Batman',
    mainTeam: 'Justice League',
};

if (DC.yearCreation !== 1934) {
    DC['yearCreation'] == 1934;
}
console.log('before ', Marvel);
const NewField = 'Owner'
Marvel[NewField] = 'Disney';
console.log('after ', Marvel);
console.log(DC.yearCreation);
console.log(DC.yearCreation !== 1934)