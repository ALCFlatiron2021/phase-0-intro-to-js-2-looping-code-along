function writeCards (cards) { 
  let Thankyou = []
  for (let i = 0; i < cards.length; i++) {
   Thankyou.push (`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    debugger;
  }

  return Thankyou;
}

writeCards(cards); 

function countDown () {
  let countDown = 0;
  while (countDown < 11) 
    console.log(countDown++);
  }
