function potatoPoem() {
  let count = 0;

  while (count < 8) {
    count++;

    if (count == 8) {
      console.log(`More!`);

    } else if (count == 4) {
      console.log("4!");

    } else {
      console.log(count + " potato, ");
    }
  }
}

potatoPoem()

function bananaRhyme() {
  let cheer = [`Who do`, `we ap-`, `pre-ci-`, `ate!!!`];
  let lyrics = cheer[0];
  let syllable = 0;

  for (let count = 2; count <= 16; count += 2) {

    if (count >= 10 && count <= 16) {
      console.log(`${lyrics}`);
      syllable++;
      lyrics = cheer[syllable];
    }
    else if (count == 8) {
      console.log("8!");

    } else {
      console.log(count + " bananas, ");
    }
  }
}

bananaRhyme()