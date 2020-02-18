// // compiler settings, so that we don't need the tsc app.ts command to refresh the page

// const userName = 'Maximilian';

// console.log(userName)

// // in the command line: tsc app.ts --watch or tsc app.ts -w
// // => Watch mode

// //downside: specifically have to target the app.ts file


const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('Clicked' + message);
}
if(button) {
  button?.addEventListener('click', clickHandler.bind(null, 'You are welcome'));
}