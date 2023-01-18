
const sentence = `The movie is not that bad, I like it`;
const wordNot = sentence.search("not")
const wordBad = sentence.search("bad")


if (wordNot < wordBad) {
 const firstPart = sentence.slice(0,wordNot)
 const secondPart =sentence.slice(wordBad + 3)
 console.log(firstPart + "good" + secondPart)
} else {
	console.log(sentence)
}