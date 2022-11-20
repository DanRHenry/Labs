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
let enemyList = ['gmork', 'voldemort', 'palpatine', 'lex luthor'];

async function respond() {
  // your code here
  // remember to use `await` and `ask`
}

respond();
