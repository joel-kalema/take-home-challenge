function hasContiguousSubarraySum(arr, target) {
    let sum = 0;
    const prefixSums = new Set([0]);
    for (const num of arr) {
        sum += num;
        if (prefixSums.has(sum - target)) {
            return true;
        }
        prefixSums.add(sum);
    }
    return false;
}


console.log(hasContiguousSubarraySum([4, 2, 7, 1, 9, 5], 17)); //---->>> true