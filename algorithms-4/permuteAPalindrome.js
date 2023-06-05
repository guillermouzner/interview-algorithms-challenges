/*
Permute a Palindrome
DESCRIPTION:
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

For this kata assume that all characters are lowercase.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome (input) { 
  const normalizeInput = input.toLowerCase().normalize("NFD").replace(/[^a-z]/g, '')

  const count = Object.values(normalizeInput.split("").reduce((acc, elem) => {
    return {...acc, [elem]: acc[elem] ? acc[elem]+1 : 1}    
  }, {}))

  const [evenLetter, oddLetter] = count.reduce(([evenLetter, oddLetter], elem) => {
    if (elem%2 === 0) return [[...evenLetter,elem], oddLetter]
    return [evenLetter, [...oddLetter, elem]]
  }, [[],[]])

  if ([...new Set(evenLetter)].length===1 && (oddLetter[0] === 1 && oddLetter.length === 1) || oddLetter.length === 0) return true

  if(oddLetter.length === 1) return true

  if(evenLetter.length === 0 && oddLetter.length === 0) return true
  

  return false
}

function permuteAPalindrome(input) {
  const normalizeInput = input.toLowerCase().normalize("NFD").replace(/[^a-z]/g,'')
  
  const set = new Set()

  for(let i of normalizeInput){
    set[set.has(i) ? "delete" : "add"](i)
  }

  return set.size < 2
}
// a a a a a
// b b

// a ==> palindrome
