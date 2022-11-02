const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    let firstTwoDrivers = drivers;
    return firstTwoDrivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers) {
    let lastTwoDrivers = drivers;
    return lastTwoDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};