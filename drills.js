const max = (numbers) => {
    let i = 0
    let counter = 0
    while (i < numbers.length) {
        if (counter < numbers[i]) {
            counter = numbers[i];
        }
        i++
    }
    return counter;
}

const min = (numbers) => {
    let i = 0
    let counter = numbers[0]
    while (i < numbers.length) {
        if (counter > numbers[i]) {
            counter = numbers[i];
        }
        i++
    }
    return counter;
}

testArr = [];

console.log(min(testArr));

//-----------------------------------------------------------