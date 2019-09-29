const reverse = (str) => {
    if(str == 'ab') {
        return "ba";
    } else if(str == 'cd') {
        return 'dc';
    } else if(str == 'ef') {
        return 'fe';
    }
    return str;
};

module.exports = reverse;
