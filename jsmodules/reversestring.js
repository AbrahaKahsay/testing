const reverseString = (string) => {
    let newStr = '';

    newStr = string.split('').reverse().join('');

    return newStr;
}

module.exports = reverseString;