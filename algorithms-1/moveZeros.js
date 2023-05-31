// write an algorithm that takes an array and moves all of the zeros to the end 
// preserving the order of the other elements

// moveZeros([false,1,0,1,0,2,0,1,3,"a"])  return --> [false,1,1,2,1,3,"a",0,0,0]


function moveZeros(arr) {
  let zeros = []
  let noZeros = []
  
  arr.map(e=>{
    if(e!==0) return noZeros.push(e)
    return zeros.push(e)
  })
  
  return noZeros.concat(zeros)
}


function moveZeros(arr) {
  const [zeros, noZeros] = arr.reduce(([zeros, noZeros], elem) => {
    if(elem === 0) return [[...zeros, elem], noZeros] 
    return [zeros, [...noZeros, elem]]
  }, [[],[]])

  return noZeros.concat(zeros)
}

function moveZeros(arr) {
  const noZeros = arr.filter(elem => elem !== 0)
  const zeros = new Array(arr.length - noZeros.length).fill(0)
  return noZeros.concat(zeros)
}

function moveZeros(arr) {
  let zeros = []
  let noZeros = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) zeros.push(arr[i])
    else noZeros.push(arr[i])
  }

  return noZeros.concat(zeros)
}


function moveZeros(arr) {
  const {zeros, noZeros} = arr.reduce(({zeros, noZeros}, elem) => {
    if (elem === 0) return {zeros: [...zeros, elem], noZeros}
    return {zeros, noZeros: [...noZeros, elem]}
  }, {zeros: [], noZeros: []})

  return noZeros.concat(zeros)
}
