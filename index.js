function writeCards(cards, event){
let messages =[]
    for (let i = 0; i < cards.length; i++)
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    return messages
}
function countDown(int){
    while (int >= 0)
    console.log(int--)
}