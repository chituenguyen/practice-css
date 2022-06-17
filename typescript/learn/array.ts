const names: string[] = [];
names.push("Tue")

// name.push(3) ==> error
console.log(names)


// readonly
const newArray : readonly string[] = ["Dylan"]
// newArray.push("Hello") => error


// TypeScript can infer the type of an array if it has values.
const number = [1,2,3] 
