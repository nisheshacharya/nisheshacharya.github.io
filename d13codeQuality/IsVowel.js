/**
 * 
 * @param {string} char is single alphabet string. 
 * @returns {boolean} true if a char is vowel. 
 */
function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    return false;
}
export default isVowel;