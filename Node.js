const people = [
            {name: 'Joao', age: 28},
            {name: 'George', age: 20},
            {name: 'Simon', age: 18},
            {name: 'Bob', age: 103},
            {name: 'Peter', age: 89}
];

const oldestSoFar = people.reduce((acumulator, currentValue) => {
    // console.log('acumulator', acumulator)
    // console.log('currentValue', currentValue)
    
    return (acumulator.age > currentValue.age
        ? acumulator
        : currentValue);
    
} );

console.log(oldestSoFar);

