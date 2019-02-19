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
  //
  // $reset.on('click', function(event){
  //   let moves = array.prototype.slice.call($('.square'))
  //   movesMade.map((m) => {
  //     m.innerHTML= ''
  //   })
  //   $winnerContainer.html('')
  //   $winnerContainer.css('display','none')
  //   currentTurn = 1
  //   movesMade = 0
  // })

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
    console.log(xs, os)
    // if (movesMade > 4) {
    //   let moves = Array.slice.call($('.square'))
    //   let results = moves.map(function(square) {
    //     return square.innerHTML
    //   })
    //   let winningCombos = [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],
    //     [2,4,6]
    //   ]
    // }
  }

  function squaresChecked(indexes) {
    return indexes.every(
      function(index) {
        return square[index].innerHTML === 'X'
      }
    }
  }

  if (squaresChecked([0, 1, 2]) || squaresChecked([3, 4, 5]) || squaresChecked([6, 7, 8]) || squaresChecked([0, 3, 6]) || squaresChecked([1, 4, 7]) || squaresChecked([2, 5, 8]) || squaresChecked([0, 4, 8]) || squaresChecked([2, 4, 6]) {
    alert("Win")
  }
  if (winConditions.some(squaresChecked)) {
    alert("Win")
  }


  // function declareWinner(winner) {
  //
  // }

})
