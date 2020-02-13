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