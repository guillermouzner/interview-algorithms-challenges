/*
Elementos pares

Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces

["A","B","A","C","C","C","C"] ==> ["A","B"]
[1,2,3,1,2] ==> [1,2]
*/

function evenArray(str) {

  // return str.reduce((acc,elem, i) => {
  //   return {
  //     ...acc,  
  //     [elem] : acc[elem] ? acc[elem]+1 : 1}
  // }, {})

  // return [...new Set(str.reduce((acc, elem, i, arr) => {
  //   if(arr.filter(l => l===elem).length%2 ===0) return [...acc, elem]
  //   return acc
  // }, []))]

  const set = new Set()

  for (let i of str) {
    if(!set.has(i)) {
      if(str.filter(l => l===i).length%2 === 0) {
        set.add(i)
      }
    }
  }

  return Array.from(set)
}