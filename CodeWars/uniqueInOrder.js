// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
    var step
    var result = []
    for (step = 0; step < iterable.length; step++) {
      if (iterable[step] !== iterable[step + 1]){
        result.push(iterable[step])
      }
    }
    return result
  }