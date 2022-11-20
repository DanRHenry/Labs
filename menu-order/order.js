let orderNum = 1;

const menu = {
  Burger: 4.00,
  HotDog: 3.00,
  Fries: 3.50,
  Salad: 4.25,
  Shake: 4.99,
  Soda: 2.00,
  order: function(orderPlaced) {
    let orderSplit = [];
    for (let i = 0; i < orderPlaced.length; i++) {
      orderSplit.push(orderPlaced[i]);
    };
    let sum = 0;

    //? Section was broken, referring to dictionary keys, but how to point to values instead? Returning NAN
    for (item of orderSplit) {
      sum += menu[item];
    };
    console.log(`Order ${orderNum}: $${sum.toFixed(2)}`);
    orderNum++;
  }
}

let order1 = ['Burger', 'Fries', 'Shake'];
let order2 = ['Salad', 'Soda'];
let order3 = ['Fries', 'HotDog', 'Soda'];

menu.order(order1);
menu.order(order2);
menu.order(order3);

//Going Further
//What if an order is placed that contains an item not on the menu? Create error handling for this scenario.
