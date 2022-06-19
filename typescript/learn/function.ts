function sumTwoNumber(a:number,b:number):number{
    return a+b;
}


console.log(sumTwoNumber(2,3))

function print():void{
    console.log('print function')
}

// optional

function newSum(a:number,b?:number):number{
    return a+(b||0);
}

// default
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  // Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
  function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }