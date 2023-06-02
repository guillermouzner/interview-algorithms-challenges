/*
FIXME: Replace all dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

function replaceDots(str) {
  return str.replace(/[.]/g,'-')
}

// function replaceDots(str) {
//   return str.split("").reduce((acc,elem)=>{
//     if (elem === ".") return acc+"-"
//     return acc+elem
//   },"")
// }