const capitalize = string => {
    let newStr = '';

    newStr = string.charAt(0).toUpperCase() + string.slice(1);

    return newStr;
}
module.exports = capitalize;