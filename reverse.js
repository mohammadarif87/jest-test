function reverse(word) {
  //var splitString = str.split(""); //split each character into an array
  //var reverseArray = splitString.reverse(); //reverse the array
  //var joinArray = reverseArray.join(""); //join the array into a single variable of string type
  return word.split("").reverse().join("");
}

module.exports = reverse;
