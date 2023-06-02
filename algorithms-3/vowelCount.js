/*
Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return str
    .split("")
    .reduce((acc,elem)=> {
      ["a","e","i","o","u"].includes(elem) 
        ? acc+1
        : acc
  },0)
  
}

function getCount(str) {
  let vowelCount = 0

  for(letter of str.split("")){
    if (["a","e","i","o","u"].includes(letter)) {
      vowelCount = vowelCount+1
    }
  }
  return vowelCount
}

const vowels = ["a","e","i","o","u"]
function getCount(str) {
  let vowelCount = 0

  for(index in str){
    if (vowels.includes(str[index]))
    vowelCount = vowelCount +1
  }

  return vowelCount
}