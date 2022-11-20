const { generatePrimeSync } = require("crypto");

class Cake {
  constructor(flavor, icing, decoration) {
    this.flavor = flavor;
    this.icing = icing;
    this.decoration = decoration;
  }
  describe() {
    // return `It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}`;
    console.log(`It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}`);

    if(
        this.flavor !== null && 
        this.icing !== null && 
        this.decoration !== null
    ) {
      console.log(
        `This ${this.flavor} cake has 
        ${this.icing} icing and it has 
        ${this.decoration} on it.`
      );
        } else if(this.flavor === null && this.icing === null) {
          console.log(
            `Can't tell what flavor or what is decorating it, but it has ${this.icing} icing.`
          );
        } else if(this.icing === null && this.decoration) {
          console.log(
            `Can't tell what icing or what is decorating it, but it is a ${this.flavor} cake.`
          );
        } else if(this.flavor === null) {
          console.log(
            `Not sure what flavor, but it has ${this.icing} icing with ${this.decoration} on it.`
          );
        } else {
          console.log(
            `Not sure what the decoration is, but it is a ${this.flavor} cake with ${this.icing} on it.`
          );
        }
      )
    }
  };

  eat(slice) {
    console.log(`A ${slice} slice of ${this.flavor} cake!`);
  }
};
// let brokenCake = new Cake('new_flavor', 'new_icing');
let chocolateCake = new Cake('chocolate', 'caramel', 'sprinkles');
// console.log(chocolateCake.describe());

let coconutCake = new Cake(`vanilla`, `coconut creme`, `coconut flakes`);
// console.log(coconutCake.describe());

let strawberryCake = new Cake(`yellow`, `strawberry`, `sliced strawberries and whipped cream`);
// console.log(strawberryCake.describe());

chocolateCake.describe();
coconutCake.describe();
strawberryCake.describe();

chocolateCake.eat('thick');
// console.log(brokenCake.describe());

/* 
I tried getting the error handler to work using null and "undefined", but don't have the time to figure it out.
*/


/*
Going Further
What if not every cake had all three properties? Set up error handling to have default values when the values are not given to the constructor and/or method.
*/