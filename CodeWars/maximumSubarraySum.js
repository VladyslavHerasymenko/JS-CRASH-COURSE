// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
    let max_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            let cur_sum = arr.slice(i,j).reduce((total, amount) => total + amount)
            if (cur_sum > max_sum) {max_sum = cur_sum}
        }
    }
    return max_sum
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSequence(arr));
