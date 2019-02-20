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
  const $reset = $('#resetButton')
  const $message = $('#message')

  // const audioOne = document.querySelector('.audioOne')
  // const squareOne = document.querySelector('#squareOne', '#squareTwo')
  //
  // //Button Click Sounds //
  //
  // audioOne.src = 'audio/drawcircle.wav'
  // squareOne.addEventListener('click', () => {
  //   audioOne.currentTime = 0
  //   audioOne.play()
  // })

  $sqr.on('click', function(event){
    console.log('CLICKING')
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
      // $(`#${currentGame}`).empty()
      $(`#${currentGame}`).children().empty().removeClass('square') // remobves the classes from the little squares
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
    })
    return winner
  }

  function declareWinner(winner) {
    boardGrid.splice(currentGame.split('')[5], 1, winner)
    console.log(boardGrid)
    alert('Congratulations! ' + winner + ' is the winner')
    currentGame = null
    checkGameWinner()
  }

  function checkGameWinner(){
    const xs = []
    const os = []
    let winner = ''

    // Getting lost here!!!!!!!!!
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
  //To here!!!!!!!
  function declareGameWinner(winner) {
    console.log('the actual bloody winner')
    alert('Bravo!!!! ' + winner + ' has won the game.')
    return winner
  }
  // Reset Button

  const winner = null

  function clearBoxes() {

  }

  $reset.on('click', function(){
    console.log('reset is clicked..')

    $('.board').find('div').addClass('square')
  })

  // Game board 2
  // let overAllWinner = ''
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
