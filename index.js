// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 // drivers array and name string
function findMatching(drivers, name){
    const lowerCaseName = name.toLowerCase();
//create a new array then callback the function then compare the array to the lowerCaseName
//filter the drivers name using an anonymous function 

    return drivers.filter(function(driver){
        return driver.toLowerCase() === lowerCaseName;
    });
 }

//FUZZYMATCH
 
 function fuzzyMatch(drivers, first) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(first.toLowerCase());
    });
}

const first = 'Sa';
const matchedFuzzyDrivers = fuzzyMatch(drivers, first);
console.log(matchedFuzzyDrivers); // ['Sammy', 'Sally', 'Sarah']


//DRIVEROBJECTS

const driverObjects = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'Houston' },
    { name: 'Sarah', hometown: 'Phoenix' },
    { name: 'Bobby', hometown: 'San Francisco' }
];

function matchName(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === query.toLowerCase();
    });
}

const query = 'Bobby';
const matchedNameDrivers = matchName(driverObjects, query);
console.log(matchedNameDrivers); 
// [ { name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'San Francisco' } ]

