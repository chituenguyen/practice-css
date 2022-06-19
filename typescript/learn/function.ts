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