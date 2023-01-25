let numberOfBeer = Number (prompt("how many beers?"));
let numberOfBeerToRemove = 1;



while (numberOfBeer > 0) {
  let stanza = makeStanza(numberOfBeer, numberOfBeerToRemove);
  console.log(stanza);
  numberOfBeer = numberOfBeer - numberOfBeerToRemove;
  numberOfBeerToRemove = numberOfBeerToRemove + 1;
}



function makeStanza(numberOfBeer, counter){
	

  let bottleOrBottles = getBottleOrBottles(numberOfBeer);

  let stanza = `${numberOfBeer} ${bottleOrBottles} of beer on the wall
  ${numberOfBeer} ${bottleOrBottles} of beer
  Take ${counter} down, pass it around
  ${numberOfBeer - counter} ${getBottleOrBottles(numberOfBeer - counter)} of beer on the wall`;

  return stanza;

}

function isPlural(numberOfBeer){
	if (numberOfBeer > 1) {
    return true;

  } else {
  	return false;
  }

}


function getBottleOrBottles(numberOfBeer){
	if (isPlural(numberOfBeer)) {
		return "bottles";
	} else {
		return "bottle";
	}

}

