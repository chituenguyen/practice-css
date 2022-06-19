// Union types are used when a value can be more than a single type.

const printStatus = (code: string | number) =>{
    console.log(code)
}

printStatus(404)
printStatus('404')


