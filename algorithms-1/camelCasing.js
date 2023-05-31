/*
Complete the solution so that the function will break up camel casing, using a space
between words

solution("camelCasing") ==> "camel Casing"
*/

function solution(word){
  return word.split("").reduce((acc, elem) => {
    if (elem === elem.toLowerCase()) return acc+elem
    return acc+" "+elem
  }, "")
}