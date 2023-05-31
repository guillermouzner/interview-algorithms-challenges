/*
Return the number (count) of vowels in the given string.

The input string will only consist of lower case letters and/or spaces
*/

function getCount(word) {
  return word.split("").reduce((acc, elem) => {
    if(["a","e","i","o","u"].includes(elem)) return acc+1
    return acc
  }, 0)
}