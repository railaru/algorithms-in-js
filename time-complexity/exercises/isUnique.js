//big-o: quadratic

const isUnique = arr => {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log('outer loop i: ' + i);

        for (let j = 0; j < arr.length; j++) {
            console.log('outer loop j: ' + j);

            if (i !== j && arr[i] === arr[j]) {
                console.log(
                    'returning false because: (i !== j && arr[i] === arr[j])',
                    i !== j && arr[i] === arr[j],
                );
                result = false;
            }
        }
    }

    return result;
};

// console.log(isUnique([1, 2, 3] === true));
// console.log(isUnique([1, 2, 3] === false));

//console.log(isUnique([1, 2, 3, 4, 4]));

//big-o: caching -> linear

const isUniqueBreadcrumb = arr => {
    const breadcrumbs = {};
    let result = true;

    for (let index = 0; index < arr.length; index++) {
        if (breadcrumbs[arr[index]]) {
            result = false;
        } else {
            breadcrumbs[arr[index]];
        }
    }

    return result;
};

console.log(isUniqueBreadcrumb([1, 2, 3]));
