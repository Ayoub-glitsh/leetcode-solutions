**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xString = `${x}`;
    return xString.split("").reverse().join("") === xString;
};
