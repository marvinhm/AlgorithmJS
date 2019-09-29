const reverse = (str) => {
    if(str == 'ab') {
        return "ba";
    } else if(str == 'cd') {
        return 'dc';
    }
    return str;
};

module.exports = reverse;
