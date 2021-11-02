// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
    if (typeof iterable === 'string'){
      iterable = iterable.split('');
    }
    var step;
    var result = new Array();
    for (step = 0; step < iterable.length; step++) {
      if (iterable[step] == iterable[step + 1]){}
      else{
        result.push(iterable[step]);
        console.log(iterable[step]);
      }
    }
    return result;
  }