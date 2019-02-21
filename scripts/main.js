$(() => {

// Variables  - 2 players //

  const player1 = 'X'
  const player2 = 'O'

  let isPlayerOneTurn = true
  let movesMade = 0

// All possible win combinations //

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
  const $reset = $('#resetButton')
  const $message = $('#message')

// Audio examples

  // const audioOne = document.querySelector('.audioOne')
  // const squareOne = document.querySelector('#squareOne', '#squareTwo')
  //
  // //Button click sounds and alert messages //
  //
  // audioOne.src = 'audio/drawcircle.wav'
  // squareOne.addEventListener('click', () => {
  //   audioOne.currentTime = 0
  //   audioOne.play()
  // })


// Click to add X or O and return nothing to remain the same //

  $sqr.on('click', function(event){
    if($(this).text()) return
    if(currentGame === null || currentGame === $(this).parent().attr('id')) {
      currentGame = $(this).parent().attr('id')
      movesMade++
      if(isPlayerOneTurn) {
        resetSound.play()
        event.target.innerHTML = player1
        event.target.style.color = 'yellow'
      } else {
        event.target.innerHTML = player2
        event.target.style.color = 'orange'
      }
    }

// Checks for the individual winner and removes the classes from the little squares, adding X and O photos as placeholders for winner as each game is won //

    if(checkforWinner()) {
      // $(`#${currentGame}`).empty()
      $(`#${currentGame}`).children().empty().removeClass('square')
      if(isPlayerOneTurn) {
        $(`#${currentGame}`).addClass('winX')
      } else {
        $(`#${currentGame}`).addClass('winO')
      }

      declareWinner(isPlayerOneTurn ? player1 : player2)
    }
    if(checkGameWinner()) {
      console.log('checkGameWinner is doing its thing')
      declareGameWinner(isPlayerOneTurn ? player1 : player2)
    }
    isPlayerOneTurn = !isPlayerOneTurn
  })

  function checkforWinner() {
    const xs = []
    const os = []
    const draw = []
    let winner = ''

    Array.from($(`#${currentGame}`).children()).forEach((item, index) => {
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
      // }
    })
    return winner
  }

// Announces individual game winner and set alert message

  function declareWinner(winner) {
    boardGrid.splice(currentGame.split('')[5], 1, winner)
    console.log(boardGrid)
    alert('Congratulations! ' + winner + ' is the winner')
    currentGame = null
    checkGameWinner()
  }

// Audio alert win sound //

    // const success = document.querySelector('.successfulWin')
    //   success.addEventListener('alert', () => {

  function checkGameWinner(){
    const xs = []
    const os = []
    let winner = ''

// Make X and O unchangeable

    Array.from(boardGrid).forEach((item, index) => {
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
    console.log(winner, 'is the winner')
    checkForOverallWin()
    return winner
  }

// Announces overall game winner and sets alert message

  function declareGameWinner(winner) {
    console.log('the actual bloody winner')
    alert('Bravo!!!! ' + winner + ' has won the game.')
    return winner
  }

  // Reset Button //

  $reset.on('click', function(){
    console.log('reset is clicked..')

    $('.board').find('div').addClass('square')
    $('.board').removeClass('winO')
    $('.board').removeClass('winX')
  })

// Reset button sound? //

  // })

  const resetSound = document.getElementById('resetSound')
  // $reset.on('click', function(){
  //   resetSound.play()
  // })

  // Checking for an overall game winner and displaying win message //

  function checkForOverallWin(){
    console.log('I am checking for overall win')
    winningCombos.forEach(combo => {
      if(combo.every(number => boardGrid[number] === 'X')) {
        currentGame = null
        // overAllWinner = 'X!'
        console.log('X! has WON')
      } else if (combo.every(number => boardGrid[number] === 'O')) {
        currentGame = null
        // overAllWinner = 'O!'
        console.log('O! has WON')
      }
    })

  }



})
