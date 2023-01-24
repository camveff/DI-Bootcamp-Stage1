let answer = prompt("type a few words seperted by commas");

let words = answer.split(",");


let LengthOfLongestWord = getLengthOfLongestWord();

displayRows();




function displayRows(){
 let delimiterRow = createDelimiterRow();
 console.log(delimiterRow);
 for (let word of words) {
   displayWord(word);
 }

 console.log(delimiterRow);
}

function displayWord(word){
 console.log("* " + word);
}




function getLengthOfLongestWord(){
  let LengthOfLongestWord = 0

  for (let word of words){
    let wordLength = word.length;
    if (wordLength > LengthOfLongestWord){
    LengthOfLongestWord = wordLength;

    }

  }

  return LengthOfLongestWord;

}

function createDelimiterRow(){
	let numberOfStarsOnFirstRow = LengthOfLongestWord + 4;
}


function createFirstRow() {
  let numberOfStarsOnFirstRow = LengthOfLongestWord + 4;
  let row = "";
  for (let i = 0; i < numberOfStarsOnFirstRow; i++) {
    row = row + "*"
  }
  return row;
}


