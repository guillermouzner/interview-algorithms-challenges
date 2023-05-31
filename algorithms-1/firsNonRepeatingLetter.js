/*
Write a function named firs_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string

for example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string

As an added challenge, upper- and lowercase letter are considered the same character,but the function should return the correct case for the initial letter. For example, the input "sTreSS" should return "T"

if a string contains all repeating characters, it should return an empty string ("") or None
*/

function firs_non_repeating_letter(word) {
  const newWord = word
    .toLowerCase()
    .split("")
    .find(letter => {
      return word
        .toLowerCase()
        .split("")
        .indexOf(letter) 
        === 
        word
        .toLowerCase()
        .split("")
        .lastIndexOf(letter)
      })

  return word
    .split("")
    .find(letter => letter.toLowerCase() === newWord) || "None"
}