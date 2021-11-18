// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
    let max_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            if (countSum(arr, i, j) > max_sum) {
                max_sum = countSum(arr, i, j)
            }
        }
    }
    return max_sum
  }
function countSum (array, i, j) {
    return array.slice(i,j).reduce((total, amount) => total + amount)
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSequence(arr));
