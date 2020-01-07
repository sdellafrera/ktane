function getAllNumber(serial) {
    return serial.match(/\d+/g).join('');
}

function isOdd(number) {
    return number % 2 != 0;
}

function getPositionByValueInArray(array, value) {
    array.forEach(function (item, index, arr) {
        if (item == value) {
            console.log(item, index);
        }
    });
}