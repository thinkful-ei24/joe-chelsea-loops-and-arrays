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

//------------------------------------------------------------

//FizzBuzz


const fizzBuzz = (countTo) => {
    arr = [];
    for (let i = 1; i <= countTo; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            arr.push('FizzBuzz');
        }else if (i % 3 === 0) {
            arr.push('Fizz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz(15));

//-------------------------