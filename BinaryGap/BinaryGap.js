// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(n) {
  let binary = n.toString(2)
  let num = binary.match(/1/g).length; 
  if(num === 1){
    return 0
  }else{
    binary = binary.split('1')
    for (let i = 0; i < binary.length; i++) {
      binary[i] = binary[i].length
    }
    return Math.max(...binary)
  }
}