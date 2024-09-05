function mergeSort(arr){
    if(arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    return merge (mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
    const result = [];

    let L = 0;
    let R = 0;

    while(L < leftArr.length && R < rightArr.length){
        if(leftArr[L] < rightArr[R]){
            result.push(leftArr[L++]);
        } else {
            result.push(rightArr[R++]);
        }
    }
    while(L < leftArr.length) {
        result.push(leftArr[L++]);
    }
    while(R < rightArr.length) {
        result.push(rightArr[R++]);
    }

    return result;
}

console.log(mergeSort([2,3,5,4,1]))