const { endianness } = require('os');
const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// Don't change anything above this line!!!

// This array is only a reference to enemies. You do not need to utilize it. Feel free to use your own enemy names.
let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

//async function respond() {

  // your code here

  process.stdin.once('data', input => {
    //      6
        let nameInput = ('stdin: ', input.toString()); // without .toString, the returned information would be in hexadecimal
        console.log(nameInput)
    //
    });


process.stdin.once("data", askName)

function askName(input) {
    console.log(`Hey, what's your name?`);
    let x = (input.toString());
};

let name = await ask(`Hey, what's your name?`);

// let name = `darth vader`; // change to input value later
function respond(name) {
    if (name == `darth vader`) { //* the name is an enemy */) {
        console.log(`Go away, Darth Vader!`);
        /* check if their name is 'darth vader' */
    } else if (enemyList.includes(name)) {
      /* tell them to go away */
        console.log(`go away`);
    } else {
        console.log(`well, hello, ${name}!`)
      /* greet them warmly by their name */
    }
}


  // remember to use `await` and `ask`



respond('palpatine');
