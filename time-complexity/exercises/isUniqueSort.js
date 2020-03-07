//Task: transform this simple sorting algorithm into an unique sort
//it should not return any duplicate value in the sorted array.

//input: [1, 5, 2, 1] => output: [1, 2, 5]
//input: [4, 2, 2, 3, 2, 2, 2] => output: [2, 3, 4]

const uniqSort = function(arr) {
    const breadcrumbs = {};

    for (let index = 0; index < arr.length; index++) {
        if (breadcrumbs[arr[index]]) {
        } else {
            breadcrumbs[arr[index]];
        }
        // console.log('breadcrumbs: ', breadcrumbs);
        console.log('arr[index]: ', arr[index]);
    }

    return arr.sort((a, b) => a - b);
};

console.log('uniqSort: ', uniqSort([4, 2, 2, 3, 2, 2, 2]));
