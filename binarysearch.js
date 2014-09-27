if (isNaN(process.argv[2])) {
    console.log(process.argv[2] + ' is not a valid number!');
    return;
}
console.log('Searching for number: ' + process.argv[2]);

var originialArray = [1,2,3,4,5,6,7,8,9];

function binarySearch(array, number) {
    var left = 0,
        right = array.length - 1,
        mid = 0;

        while(left <= right) {
            mid = (left + right) / 2 | 0;

            if (array[mid] < number) {
                left = mid + 1;

            } else if (array[mid] > number) {
                right = mid - 1;

            } else {
                console.log(array);
                console.log('Number found at index: ' + mid);
                return;
            }
        }

        console.log(array);
        console.log('Number not found!');
}

binarySearch(originialArray, parseInt(process.argv[2]));