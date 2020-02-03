/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    a = n == 0 ? 1 : n;
    sum = 1;
    for(let i = 1; a > i; i++) {
       if(i == 1) {
        sum *= a;
       }
        sum *= ( a - i );
    }
    return sum;
}
