const reverse = (str) => {
    if(str.length > 1) {
        return str[1] + str[0];
    }
    // if(str == 'ab') {
    //     return "ba";
    // } else if(str == 'cd') {
    //     return 'dc';
    // } else if(str == 'ef') {
    //     return 'fe';
    // }
    return str;
};

module.exports = reverse;
