// by AKSHAY SATHIYA, 05/11/2019

// grab the DOM elements
const findPerm = document.querySelector('#find-permutation');
const findComb = document.querySelector('#find-combination');
const nInput = document.querySelector('#n-input');
const rInput = document.querySelector('#r-input');
const result = document.querySelector('#result');

// define the factorial function (dynamic programming)
function factorial(num) {
    // ensure default size of DP array is always 2
    let dpArr = new Array(num + 1);

    // initialize first 2 elements of DP array
    dpArr[0] = 1;

    // initialize the rest of the DP array
    for (let i = 1; i <= num; i++) {
        dpArr[i] = i * dpArr[i - 1];
    }

    return dpArr[num];
}

// define the permutation function (uses dp factorial function)
function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

// define the combination function (uses dp factorial function)
function combination(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r));
}

// define the input validation message
const posIntMsg = 'Invalid input. Please enter two positive integers!';
const nAndRMsg = 'Invalid input. \'n\' value cannot be less than \'r\' value';

// add functionality to the permutation button
findPerm.addEventListener('click', (e) => {
    // do not execute the default routine(s)
    e.preventDefault();

    // display result, or request valid input
    try {
        // extract the n and r values
        n = parseInt(nInput.value);
        r = parseInt(rInput.value);

        // validate order property of input, request valid input if needed
        if (n < r) {
            alert(nAndRMsg);
        } else {
            result.innerHTML = `Combination : C(${n}, `
                + `${r}) = ` + combination(n, r);
        }
    } catch (err) {
        alert(posIntMsg);
    }
});

// add functionality to the combination button
findComb.addEventListener('click', (e) => {
    // do not execute the default routine(s)
    e.preventDefault();

    // display result, or request valid input
    try {
        // extract the n and r values
        n = parseInt(nInput.value);
        r = parseInt(rInput.value);

        // validate order property of input, request valid input if needed
        if (n < r) {
            alert(nAndRMsg);
        } else {
            result.innerHTML = `Combination : C(${n}, `
                + `${r}) = ` + combination(n, r);
        }
    } catch (err) {
        alert(posIntMsg);
    }
});
