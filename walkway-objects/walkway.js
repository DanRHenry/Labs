class Location {
        constructor(name, description) {
        this.name = name;
        this.description = description;
        }
    }

    let home = new Location('home', 'You are at your house.');
    let sidewalk = new Location('sidewalk', 'You are on the sidewalk');
    let store = new Location('store', 'You are in the store');

    let locationCurrent = "home";
    
    let locationLookUp = {
        'home': home,
        'sidewalk': sidewalk,
        'store': store,
};

let locationStates = {
        home: ['sidewalk'],
        sidewalk: ['store', 'home'],
        store: ['sidewalk'] // added home to match the comments, but this doesn't make sense. You shouldn't be able to go from the store to home without using the sidewalk.
}

console.log(locationLookUp[locationCurrent].description);

function moveLocation(newLocation) {
    // your code here
    let validTransition = locationStates[locationCurrent]
    if (validTransition.includes(newLocation)) {
        locationCurrent = newLocation;
        // console.log(locationCurrent);
        console.log(locationLookUp[locationCurrent].description);
    } else if (newLocation == ['park']) {
        console.log('You cannot go from sidewalk to park.') // Made it work...
    } else {
        console.log('You cannot go from ',[locationCurrent], 'to ',[newLocation]);
    }
}

moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
moveLocation("store");
  // Prints 'You are in the store.'
moveLocation("home");
  // Prints 'You are at your house.'
moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
moveLocation("home");
  // Prints 'You are at your house.'
moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'