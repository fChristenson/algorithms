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

try {
    var val = parseInt(process.argv[2]),
    array = JSON.parse(process.argv[3]);
} catch (err) {
    console.log('Please use: node <file.js> <number> <json array as string e.g "[1,2,3,4]">');
    return;
}

console.log('Searching for number: ' + val);
array.sort(function (val1, val2) {
    return val1 - val2;
});
binarySearch(array, val);