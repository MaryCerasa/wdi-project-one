$(() => {

  // Variables if playing with two//
  // Game board boardOne//

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

// Overall empty board grid //

const boardGrid = ['', '', '', '', '', '', '', '', '']
  let currentGame = null

  const $sqr = $('.square')
  const $winnerContainer = $('.winner')
  // const $reset = $('#resetButton')
  const $message = $('#message')

  const audioOne = document.querySelector('.audioOne')
  const squareOne = document.querySelector('#squareOne', '#squareTwo')

  //Button Click Sounds //

  audioOne.src = 'audio/drawcircle.wav'
  squareOne.addEventListener('click', () => {
    audioOne.currentTime = 0
    audioOne.play()
  })

  $sqr.on('click', function(event){
    console.log('current game is ', currentGame)
    if(currentGame === null || currentGame === $(this).parent().attr('id')) {
      currentGame = $(this).parent().attr('id')
      movesMade++
      if(isPlayerOneTurn) {
        event.target.innerHTML = player1
        event.target.style.color = 'yellow'
      } else {
        event.target.innerHTML = player2
        event.target.style.color = 'orange'
      }
    }

    if(checkforWinner()) {
      $(`#${currentGame}`).empty()
      currentGame = null
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

    alert('Congratulations!' + '' + winner + 'is the winner')

    // InnerHTML message?
    //   if(winner === 'x') {
    //     return $message.innerHTML('Player X is the winner')
    //   } else(winner === 'o')
    //   return $message.innerHTML('Player O is the winner')
  }

  // Reset Button

  const winner = null

  function clearBoxes(number) {
    return document.getElementById('.square' + number).innerHTML = ''
  }

  const btnReset = document.getElementById('#resetButton')

  btnReset.addEventListener('click', function(){
    winner !== null
  })

  // Game board 2



})
