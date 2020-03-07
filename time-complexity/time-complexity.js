//from super fast 

const levels = [
    {
        Name: 'constant',
        Notation: '0(1)',
        Examples: [
            'arr.pop()',
            'arr.[0]',
            '1 + n',
            'const obj = {a: 1}',
            'if (1 > 2)',
        ]
    },
    {
        Name: 'logarithmic',
        Notation: '0(logn)'
    },
    {
        Name: 'linear',
        Notation: '0(n)',
        Examples: [
            'for loop',
            'arr.shift() / arr.unshift()'
            
        ]
    },
    {
        Name: 'quadratic',
        Notation: '0(n^2)'
    },
    {
        Name: 'exponential',
        Notation: '0(k^n)'
    },
]

//to super slow