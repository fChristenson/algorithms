var array = [4,5,2,1,3,7,6,9,8];
console.log('Sorting array: ' + array);
console.log('----------------------');

function mergeSort(leftArray, rightArray) {
    console.log('Sorting: ' + leftArray + ' and ' + rightArray);
    var result = [],
        leftIndex = 0,
        rightIndex = 0;

        while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
            if (leftArray[leftIndex] < rightArray[rightIndex]) {
                result.push(leftArray[leftIndex]);
                leftIndex++;

            } else {
                result.push(rightArray[rightIndex]);
                rightIndex++;
            }
        }

        result = result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
        console.log('Result: ' + result);
        return result;
}

function merge(array) {
    var mid = array.length / 2 | 0,
        left = array.slice(0, mid),
        right = array.slice(mid);

        if (array.length < 2) {
            return array;
        }

        return mergeSort(merge(left), merge(right));
}

array = merge(array);
console.log('----------------------');
console.log('Array sorted: ' + array);