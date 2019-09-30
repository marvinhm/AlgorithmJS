const reverse = (str) => {
  var string_length = str.length
  if (string_length > 1) {
    var new_string = "";
    for(var i=string_length; i>0; i--) {
      new_string+=str[i-1];
    }
    if(str.charAt(0) == str.charAt(0).toUpperCase()) {
      return new_string.charAt(0).toUpperCase() + new_string.slice(1).toLowerCase();
    }
    return new_string;
  }
  return str;
};

module.exports = reverse;
