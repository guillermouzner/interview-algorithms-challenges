/*
Write a function that takes a string of parentheses, and determines if the order of the
parentheses is valid.
The function should return true if the string is valid and false if it's invalid

"()" ==> true
")(()))" ==> false
"(" ==> false
"(())((()())())" ==> true
*/

function validParentheses(str) {
  if (str === '') return true
  const newStr = str.replace(/\(\)/g, "")
  if (newStr === str) return false
  return validParentheses(newStr)
}


function validParentheses(str) {
  if (str === "") return true

  const newStr = str.split("")
  const replace = newStr.reduce((acc, elem, index, arr)=> {
    if (arr[index] !== arr[index+1] && index<arr.length-1) {
      acc.splice(index,2)
      return acc
    }
    return acc
  }, newStr).join("")

  if (replace === str) return false
  return validParentheses(replace)
}
