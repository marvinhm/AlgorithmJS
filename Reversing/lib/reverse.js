const reverse = (str) => {
    if(str.length == 3) {
        return str[2] + str[1] + str[0];
    } else if(str.length == 2) {
        return str[1] + str[0];
    } 
    
    return str;
};

module.exports = reverse;
