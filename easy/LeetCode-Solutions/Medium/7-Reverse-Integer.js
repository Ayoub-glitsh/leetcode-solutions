/**
 * LeetCode 7. Reverse Integer (Medium)
 *
 * Problem:
 * Reverse the digits of a signed 32-bit integer, return 0 if overflow occurs.
 *
 * Approach:
 * - Convert number to string, reverse, parse back, handle sign.
 * - Check overflow after reversing.
 *
 * Complexity:
 * - Time: O(n)
 * - Space: O(n)
 *
 * Examples:
 * reverse(123) -> 321
 * reverse(-123) -> -321
 * reverse(1534236469) -> 0
 */
var reverse = function(x) {
    let number = Math.abs(x);
    let status = x < 0 ? -1 : 1;
    let reversed = parseInt(number.toString().split("").reverse().join("")) * status;

    if(reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }

    return reversed;
};
