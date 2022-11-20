let shoppingList = [ // someItem, someQuantity
    [`Turkey`, 1],
    [`Stuffing`, 1],
    [`Gravy`, 2],
];

// let newQuantity = 10;

//Add To List Function
    function addToList(someList, someItem) { // someList refers to ???, someItem refers to the food being added
    let newItem;
    let newAmount;
        for(let i = 0; i < shoppingList.length; i++) { // Iterates through the shoppingList arrays
            let [someItem, someQuantity] = shoppingList[i]; // Deconstructs the nested arrays in shoppingList
            let itemList = []; // creates a new empty array for the someItem list to populate
            let quantityList = []; // creates a new empty array for the someQuantity list to populate
            itemList.push(someItem); // populates the itemList array with someItem list to be searched
            quantityList.push(someQuantity); // populates the quantityList array with someQuantity list to be added to

// Search the list and either add an item and quantity, or just increment the quantity by 1
            if (itemList.find(s => s === someItem)) { // searches the itemList for the newItem
                // return(someItem);
                let newQuantity = someQuantity++;
                console.log(`It's here`);
                return(someItem[i][someItem, newQuantity])
        }   else {
                // itemList.push(someItem); // if the newItem is not found, it is pushed into itemList
                // quantityList.push(1);
                shoppingList.push(someItem, 1); // if the newItem is not found, it is pushed into the shoppingList
                return(someItem, someQuantity);
        };
    }
}

addToList(`Ham`, 1);
console.log(shoppingList);

// let shoppingList = [ // someItem, someQuantity
//     [`Turkey`, 1],
//     [`Stuffing`, 1],
//     [`Gravy`, 2],
// ];


console.log(shoppingList);
function removeFromList(someList, someItem) {
    shoppingList.splice(0, 1, someItem);
    console.log(shoppingList);
    // your code here
    // search someList for someItem and remove it
    // rearrange the rest of the items within the Array
    // so that there are no gaps within the Array
}
removeFromList(`Turkey`);
// function updateQuantity(someList, someItem, newQuantity) {
    // your code here
    // search someList for someItem and
    // change the quantity to the newQuantity value
// }
