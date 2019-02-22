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
  const $messageWin = $('#messageWin')
  const $messagebigWin = $('#messageOverallWin')
  const $draw = $('#draw')

  // Audio Variables //

  const player1Sound = document.getElementById('drawX')
  const player2Sound = document.getElementById('drawO')
  const winSmallBoard = document.getElementById('smallSuccessSound')
  const winLargeBoard = document.getElementById('largeSuccessSound')
  const resetSound = document.getElementById('resetSound')
  const drawSound = document.getElementById('drawSound')
  const overallWinner = document.getElementById('overallWinner')

// Click to add X or O and return nothing to remain the same //

  $sqr.on('click', function(event){
    if($(this).text()) return
    if(currentGame === null || currentGame === $(this).parent().attr('id')) {
      currentGame = $(this).parent().attr('id')
      movesMade++
      if(isPlayerOneTurn) {
        player1Sound.play()
        event.target.innerHTML = player1
        event.target.style.color = 'yellow'
      } else {
        player2Sound.play()
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
    let winner = ''

// Draw function is here //

    Array.from($(`#${currentGame}`).children()).forEach((item, index) => {
      if(item.innerHTML === 'X') {
        xs.push(index)
        console.log('xs2',xs.length)
      } else if (item.innerHTML === 'O') {
        os.push(index)
      }
    })
    const filledSquares = xs.length + os.length
    console.log('filledSquares',filledSquares)
    if(filledSquares === 9){
      $('#draw').text('Opps, the game is a draw!')
      drawSound.play()
      // alert('The Game is a draw')
      reset()
      // $(`#${currentGame}`).children().empty().removeClass('winX winO')
    }else{
      console.log('no winner yet')

    }

    winningCombos.forEach(combo => {
      if(combo.every(number => xs.includes(number))) {
        winSmallBoard.play()
        winner = 'X!'
      } else if (combo.every(number => os.includes(number))) {
        winSmallBoard.play()
        winner = 'O!'
      }
      // }
    })
    return winner
  }

  // Announces individual game winner and set alert message

  function declareWinner(winner) {
    $('#messageWin').text('Congrats! ' + winner + ' is the winner')
    boardGrid.splice(currentGame.split('')[5], 1, winner)
    console.log(boardGrid)
    // alert('Congratulations! ' + winner + ' is the winner')
    currentGame = null
    checkGameWinner()
  }

// FIX THIS PART !!!!!

  function checkGameWinner(){
    console.log('hey im being run')
    const xs = []
    const os = []
    let winner = ''

    Array.from(boardGrid).forEach((item, index) => {
      if(item === 'X') {
        xs.push(index)
      } else if (item === 'O') {
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

// Announces overall game winner //

  function declareGameWinner(winner) {
    $('#messageOverallWin').text('Bravo! ' + winner + ' has won the game')
    overallWinner.play()
    console.log('the actual bloody winner')
    // alert('Bravo!!!! ' + winner + ' has won the game.')
    return winner
  }

  // Reset Button //

  function reset() {
    // location.reload()
    resetSound.play()
    $('.board').find('div').addClass('square')
    $('.board').removeClass('winO')
    $('.board').removeClass('winX')
    // $('#draw').text('')
    $sqr.each((index, element) => {
      $(element).text('')
    })
  }

  $reset.on('click', reset)

  // Checking for an overall game winner and displaying win message //

  function checkForOverallWin(){
    console.log('I am checking for overall win')
    winningCombos.forEach(combo => {
      if(combo.every(number => boardGrid[number] === 'X')) {
        winLargeBoard.play()
        currentGame = null
        // overAllWinner = 'X!'
        console.log('X! has WON')
      } else if (combo.every(number => boardGrid[number] === 'O')) {
        winLargeBoard.play()
        currentGame = null
        // overAllWinner = 'O!'
        console.log('O! has WON')
      }
    })

  }

})
