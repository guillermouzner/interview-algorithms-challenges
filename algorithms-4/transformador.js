/*
Transformador
Hacer una funcion que reciba un objeto data y lo transforme en la estructura output

const data = {
  nombres: [STRING],
  edades: [INT]
}

const output = {
  {id: [STRING], nombre: [STRING], edad: [INT]},
  ...
}

func({nombres: ["Bruno", "Andrea"], edades: [20,19]})

output:
[
  {id: "1", nombre: "Bruno", edad: 20},
  {id: "2", nombre: "Andrea", edad: 19},
]
*/

function transp(str) {
  return str.nombres.reduce((acc, nombre, i)=> 
    [...acc,{
      "id": String(i+1), 
      nombre, 
      "edad": str.edades[i]
    }],
    [])
}