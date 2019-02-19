$(() => {

  // Variables if playing with two//
  const player1 = 'X'
  const player2 = 'O'

  let isPlayerOneTurn = true
  let movesMade = 0

  const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const $sqr = $('.square')
  const $winnerContainer = $('.winner')
  const $reset = $('#resetButton')

  $sqr.on('click', function(event){
    movesMade++
    if(isPlayerOneTurn) {
      event.target.innerHTML = player1
      event.target.style.color = 'yellow'
    } else {
      event.target.innerHTML = player2
      event.target.style.color = 'orange'
    }

    if(checkforWinner()) {
      declareWinner(isPlayerOneTurn ? player1 : player2)
    }
    isPlayerOneTurn = !isPlayerOneTurn
  })


  function checkforWinner() {
    const xs = []
    const os = []
    let winner = ''

    Array.from($sqr).forEach((item, index) => {
      if(item.innerHTML === 'X') {
        xs.push(index)
      } else if (item.innerHTML === 'O') {
        os.push(index)
      }
    })

    winningCombos.forEach(combo => {
      if(combo.every(number => xs.includes(number))) {
        winner = 'X!'
      } else if (combo.every(number => os.includes(number))) {
        winner = 'O!'
      }
    })
    return winner
  }

  function declareWinner(winner) {
    alert(winner)
  }




})
