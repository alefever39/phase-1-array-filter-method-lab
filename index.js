function findMatching(array, driverName) {
    const mathcingDrivers = array.filter(item => item.toLowerCase() === driverName.toLowerCase());
    return mathcingDrivers;
}

// const testArray = ['Some text', 'Hello', 'Akila', 'Sensitive']



function fuzzyMatch(array, driverName) {
    const matchingDrivers = array.filter(item => (item.toLowerCase().substr(0, driverName.length)) === driverName.toLowerCase());
    return matchingDrivers;
    }

// console.log(fuzzyMatch(testArray, 's'))


function matchName(array, driverName) {
    const matchingDrivers = array.filter(item => item.name === driverName)
    return matchingDrivers;
}