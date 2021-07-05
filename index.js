// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) {
    const newDrivers =  drivers.concat(name);
    return newDrivers
};

function prependDriver(name) {
    const newDrivers2 = [name, ...drivers];
    return newDrivers2;
};

function removeLastDriver() {
    const newDrivers3 = drivers.slice(0,2);
    return newDrivers3;
};

function removeFirstDriver() {
    const newDrivers4 = drivers.slice(1);
    return newDrivers4;
};







