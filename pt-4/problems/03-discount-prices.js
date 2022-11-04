/*

    Write a function using fat arrow syntax, `discountPrices` that takes in an array of prices
    and an array of discounts which correspond to each item price. The function
    should returns a new array containing strings for the new discounted prices
    formatted with a dollar sign and to two decimal places. See examples below:

    Hint: Look up `toFixed()` on MDN

    Examples:
    console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

*/

//22

let convertDollar = str => {
    let strList = str.split('');
    let dotIndex;
    let newStr;
    let counter = 0;
    for (i=0;i<strList.length;i++) {
        if (strList[i] === '.') {
            dotIndex = i;
        }
    }
    if (dotIndex === undefined) {
        newStr = '$' + str + '.00';
        return newStr;
    } else {
        for (i=dotIndex+1;i<strList.length;i++) {
            counter++
        }
    }
    if (counter === 1) {
        newStr = '$' + str + '0';
        return newStr;
    } else if (counter === 2) {
        return '$'+ str;
    } else {
        let firstHalf = strList.slice(0,dotIndex+1).join('');
        let secondHalf = strList.slice(dotIndex+1, dotIndex+3).join('');
        return '$' + firstHalf + secondHalf;
    }
}


let discountPrices = (pricesArr, discArr) => {
    let newArr = [];
    for (i=0;i<pricesArr.length;i++) {
        let discounted = (pricesArr[i] - (pricesArr[i] * discArr[i]))
        newArr.push(discounted.toString())
    }

    newArr = newArr.map(element => convertDollar(element))
    return newArr;
}

console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5]))
console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = discountPrices;
} catch (e) {
    module.exports = null;
}
