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

min(testArr);
max(testArr);

//-----------------------------------------------------------

//Compute the average

const average = (numbers) => {
    let currentNum = 0;

    let result = numbers.forEach(num => currentNum += num);

    return currentNum / numbers.length;
}

testArr2 = [1, 4,3,7,10];

average(testArr2);