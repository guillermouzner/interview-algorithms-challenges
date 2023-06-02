/*
Filter Long Words
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

function filterLongWords(str, n){
  return str.split(" ").filter(word => word.length > n)
}

// function filterLongWords(str, n){
//   return str.split(" ").reduce((acc, elem) => {
//     if(elem.length>n) return [...acc, elem]
//     return acc
//   }, [])
// }