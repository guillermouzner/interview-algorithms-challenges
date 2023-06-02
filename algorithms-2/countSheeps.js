/*
Counting sheep (ovejas)...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
function countSheeps(array) {
  return array.reduce((acc, elem) => {
    if (elem) return acc+1
    return acc
  },0)
}

// function countSheeps(array) {
//   return array.filter(e => e === true).length
// }

// function countSheeps(array) {
//   let contador = 0
//   for(let sheep of array) {
//     if (sheep) {
//       contador++
//     }
//   }
//   return contador
// }