// Task 1
const stringLength = (string) => {
    if(string.length<1 || string.length>10){
        return false;
    }
    else 
    {
    return string.length;
    }
}
module.exports = stringLength;