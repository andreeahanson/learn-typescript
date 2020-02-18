// // compiler settings, so that we don't need the tsc app.ts command to refresh the page

// const userName = 'Maximilian';

// console.log(userName)

// // in the command line: tsc app.ts --watch or tsc app.ts -w
// // => Watch mode

// //downside: specifically have to target the app.ts file
let appId = "abc";

const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if(n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string, age: number) {
  let userName =  "Max"
  console.log('Clicked' + message);
}
if(button) {
  button?.addEventListener('click', clickHandler.bind(null, 'You are welcome', 4));
}