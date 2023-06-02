/*
Shortest Word
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  return s.split(" ").reduce((acc,elem) => {
    if(elem.length<acc) return elem.length
    return acc
  }, s.split(" ")[0].length)
}

function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length))
}