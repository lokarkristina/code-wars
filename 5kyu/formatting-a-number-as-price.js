// ? 5kyu: Formatting a number as price
// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

// Instructions
// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents,
// cents need to be truncated to 2 decimals, in the case that the decimal part
// of the number is 1 character long or none you should add 0's so that the result
// will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

// Solution
const numberToPrice = (number) => {
    const split = String(number).split('.');
    const formatted = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    const cents =
        split.length > 1 &&
        split[split.length - 1].substring(0, 2).padEnd(2, '0');

    return (!+number && 'NaN') || `${formatted}.${!cents ? '00' : cents}`;
};

// Best Solution
var numberToPrice = function (n) {
    return typeof n != 'number'
        ? 'NaN'
        : n
              .toFixed(3)
              .replace(/\d$/, '')
              .replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,');
};

// Sample Tests
Test.assertEquals(numberToPrice(1500.129), '1,500.12');
Test.assertEquals(numberToPrice(-5), '-5.00');
Test.assertEquals(numberToPrice(1000000.5), '1,000,000.50');
Test.assertEquals(numberToPrice('@'), 'NaN');
