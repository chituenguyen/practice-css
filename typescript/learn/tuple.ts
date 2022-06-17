// A tuple is a typed array with a pre-defined length and types for each index.


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// wrong order

// let a : [number, string, boolean]
// a = [2,'1', '1'] => error

// readonly tuple
// Tuples only have strongly defined types for the initial values:


// define our tuple
let b: [number, boolean, string];
// initialize correctly
b = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
b.push('Something new and wrong');
console.log(b);
// => readonly
let b_read : readonly [number,boolean,string];

// named tuples
const graph: [x: number, y: number] = [55.2, 41.3];

// destructing tuples
const graph1: [number, number] = [55.2, 41.3];
const [x1,y1] = graph1;

console.log(typeof x1)
