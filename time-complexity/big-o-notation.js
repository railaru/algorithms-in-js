//what if we have multiple expressions/loops/etc?

//1 + 1 + 1 

//n * n * n

//if complexity increases = multiply, else add

//base is determined by the input devision

//complexity of common operations:

const commonOperationComplexity = [
    {
        Complexity: 'O(1)',
        Operation: 'Running a statement'
    },
    {
        Complexity: 'O(1)',
        Operation: 'Value look-up on an array, object, variable'
    },
    {
        Complexity: 'O(logn)',
        Operation: 'Loop that cuts problem in half every iteration'
    },
    {
        Complexity: 'O(n)',
        Operation: 'Looping through the values of an array'
    },
    {
        Complexity: 'O(n^2)',
        Operation: 'Double nested loops'
    },
    {
        Complexity: 'O(n^3)',
        Operation: 'Triple nested loops'
    },
]

//keep in mind what happens when you execute the code and what happens as input changes