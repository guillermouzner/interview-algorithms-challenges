/*
In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

function greatest(number) {
  return number.split("").reduce((acc, _elem, index, arr) => {
    const num = Number(arr.slice(index,index+5).join(""))
    if(num > acc) return num;
    return acc
  }, 0)
}