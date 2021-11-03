// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c){
    return [a, b, c].reduce(function(i, j) {return i + j}) - Math.max(a, b, c) > Math.max(a, b, c)
  }