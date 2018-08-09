// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return (x) => x * num
}

function fareDoubler(num) {
  return createFareMultiplier(num)(2)
}

function fareTripler(num) {
  return createFareMultiplier(num)(3)
}

function selectDifferentDrivers(drivers, callback) {
  return callback(drivers)
}
