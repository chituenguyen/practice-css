// Explicit
let firstname: string = "Tue";
// Implicit
let lastName = "Nguyen"

// error
// firstname = 33;
// lastName = 33;

// types any

let v: any =true;
v = "STRING"

console.log(v)
Math.round(v)

// unknown similar any but safer 
let w: unknown = 1;
w = 'string';
w = {
    runANonExistentMethod: () => {
      console.log("I think therefore I am");
    }
  } as { runANonExistentMethod: () => void}

  if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }



// never 
//   let x: never = true; --> error(rarely)

// undefined and null 
let y: undefined = undefined;
let z: null = null;