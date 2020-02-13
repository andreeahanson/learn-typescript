function add(n1: number, n2: number) {
  return n1 + n2;
}

//Void return type

function printResult( num: number) : void {// : void This function doesn't have a return statement, that's why the type is void return 
  console.log('Result: ' + num);
  // can just return nothing, and wouldn't get an error, but it's not necessary;
  // return;  
}

printResult(add(5, 12));


// Undefined type

function printResultUndef( num: number) : undefined {// : void This function doesn't have a return statement, that's why the type is void return 
  console.log('Result: ' + num);
  return;
}

printResult(add(5, 12));





// function type - allows us to describe which type of function specifically we want to use: be it an expected value in a param, for creating a fct with a callback, or with a variable.

// let combineValues: Function;
// let combineValues: () => number; //creating a function type => combined values accept any function that takes no param and then returns a number;
let combineValues: (a: number, b: number) => number; //combined values should accept any fct that takes in 2 param, where each param is a nr, and where the fct overall returns a number;

combineValues = add;
// combineValues = 5; //would throw error because it's not a function with one argument
// combineValues = printResult; //the result would be undefined

console.log(combineValues(8, 8));






function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});