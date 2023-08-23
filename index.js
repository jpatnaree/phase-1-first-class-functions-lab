// Code your solution in this file!
const driver = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (function(driver) {
    let newDriver = driver.slice(0,2);
    return newDriver;
    // console.log(driver.slice(0,2))
})

const returnLastTwoDrivers = (function(driver) {
    let newDriver = driver.slice(2)
    return newDriver;
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return createFareMultiplier(fare)(3);
}

function createFareMultiplier(fare) {
    return function inner(value) {
        return fare * value
    }
}

//const createFareMultiplier = function (value) {
//  return funtion(fare) {
//    return value*fare
//}
//}

function selectDifferentDrivers(drive, func) {
    const newDrive = func(drive);
    return newDrive;
}

