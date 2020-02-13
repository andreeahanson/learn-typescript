// unknown types

let userInput: unknown; //can store any value without getting errors, but it's stricter than 'type any'
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // it doesn't work

if(typeof userInput === 'string') {
  userName = userInput;
}


// never type = never produces a return value

function generateError(message: string, code: number) : never {
  throw { message: message, errorCode: code };
}

generateError('An error occured', 500)