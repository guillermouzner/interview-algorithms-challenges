/*
Create the function prefill that returns an array of n elements that all have the same value v
See if you can do this without using a loop

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n es 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g '123') thats is >=0, throw a TypeError

when throwing a TypeError, the message should be n is invalid
*/

function prefill(n,v) {
  if(n === 0) return []
  if (Number.isNaN(Number(n)) || !Number.isInteger(n)) throw new TypeError(`${n} is invalid`)
  return new Array(n).fill(v)
}