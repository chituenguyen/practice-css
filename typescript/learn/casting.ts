let x: unknown = 'hello';
console.log((x as string).length);

// Using <> works the same as casting with as.
console.log((<string>x).length);