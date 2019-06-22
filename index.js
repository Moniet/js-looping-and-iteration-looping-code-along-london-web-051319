wrapGifts(gifts);

function writeCards(namesArr, event) {
  var cards = [];

  for (let i = 0; i < namesArr.length; i++) {
    let message = `Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`;
    cards.push(message);
  }

  return cards;
}

function countdown(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }

  console.log(num);
}
