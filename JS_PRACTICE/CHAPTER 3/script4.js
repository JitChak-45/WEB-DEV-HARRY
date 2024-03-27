let arr = [3, 2, 1, 6, 7];

const findMean = (arr) => {
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    return ans / 5;
}
let result = findMean(arr);

console.log(result);