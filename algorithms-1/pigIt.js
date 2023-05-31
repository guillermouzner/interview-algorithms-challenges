/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched

pigIt("Pig latin is cool"); ==> igPay atinlay siay oolcay
pigIt("Hello world !"); ==> elloHay orldway !
*/

function pigIt(str) {
  const isWord = /^[a-zA-Z]+$/;

  return str.split(" ").reduce((acc, elem)=> {
    let string = elem.split("")
    return isWord.test(elem) ? acc + string.slice(1).join("") + string[0] + "ay" + " " : acc + string.slice(1).join("") + string[0] + " "
  }, "")
}

function pigIt(str) {
  const isWord = /^[a-zA-Z]+$/;

  return str.split(" ")
      .map(word => isWord.test(word) 
        ? `${word.slice(1)}${word.charAt(0)}ay` 
        : word
      )
      .join(" ")
}