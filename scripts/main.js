$(() => {

  // Variables if playing with two//
  const player1 = 'X'
  const player2 = 'O'

  let isPlayerOneTurn = true
  let movesMade = 0

  const $sqr = $('.square')
  let $winnerContainer = $('.winner')
  let $reset = $('#resetButton')

  $sqr.on('click', function(event){
    movesMade++
    if(isPlayerOneTurn) {
      event.target.innerHTML = player1
      event.target.style.color = 'red'
      isPlayerOneTurn = false
    } else {
      event.target.innerHTML = player2
      event.target.style.color = 'blue'
      isPlayerOneTurn = true
    }

    if(checkforWinner()) {
      declareWinner(isPlayerOneTurn ? player1 : player2)
    }
  })

  function checkforWinner() {
    const xs = []
    const os = []
    Array.from($sqr).forEach((item, index) => {
      if(item.innerHTML === 'X') {
        xs.push(index)
      } else if (item.innerHTML === 'O') {
        os.push(index)
      }
    })
  }
  console.log(xs, os)




})
