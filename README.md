# Ultimate Tic Tac Toe

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project Brief: (*SEI Project 1:*) :video_game: 

* To create a fully functional game by using HTML5, CSS and vanilla JavaScript.

* We were tasked to use design logic for winning & visually display which player won.

* We had to include separate HTML / CSS / JavaScript files, Javascript or jQuery for DOM manipulation, and semantic markup for HTML and CSS.

* The player had to be able to clear at least one board, with their score displayed at the end of the game. Responsive design was recommended.

*__Timeframe:__* 7 days

*__Team:__* Solo project

*__Deployed Project Link:__*  [Ultimate Tic Tac Toe](https://marycerasa.github.io/wdi-project-one/ "Ultimate Tic Tac Toe")

## App Overview:

### Overview:   :x::o:

Ultimate Tic Tac Toe is a variation on the classic children's game. In this version, each cell of the Tic Tac Toe board is another game of Tic Tac Toe. Winning a smaller game, places that player's token (X or O) in the larger game's cell.

The first player can choose any of the smaller boards to start on. Whichever cell they choose will determine the board that the opponent will play on. If the board is completed, the opponent can choose any board to play on.

The aim is to win the larger Tic Tac Toe game. 

## Tech Stack :computer:

**Client:** JavaScript(ES6), HTML5, CSS3, jQuery

**Tools:** Git, GitHub, Flexbox

![screenshot](https://i.postimg.cc/wTDVxKd7/Full-Game-Screenshot1.png)

### Approach:

*Ultimate game -* The first challenge for me was to create a standard Tic Tac Toe game with a win condition. Then I had to ensure that the larger game was also implemented. I had to make good use of Object Oriented Programming (constructor functions) here. 

*Multiplayer feature -* I also had to ensure that the game had the ability for two players to compete simultaneously on the same computer, taking turns to make their moves, with individual score counts.

*Scoreboard -* Lastly, I had to ensure that the winner was displayed when the game is over.

## Process & Walkthrough: :runner:

As this was a solo project I worked using Version-Control via Git on GitHub myself. The game itself went through various development phases and I'd consistently write code and then rewrite once I found a better solution.  

I wanted to ensure that my code was divided into small reusable functions, in order to provide ease of use and understanding for myself as a new developer but also to ensure scalability for the multiplayers.

__*Steps 1-5:*__

* Define: X and O shapes 
* Make grid 
* Code all HTML
* How to code an opening page and button intro
* Code smaller boxes and then can make it bigger eventually

**Gameboard:**

3 x 3 grid within  the larger 3 x 3 game board: 9 squares for each board, 81 squares to control in total (local versus global boards).

![screenshot](https://i.postimg.cc/50G3yb0F/Global-Boards.png "Global Game Board")

**Three Winning Patterns:**

Combinatorial Game Theory – is used to analyse the possible outcomes of tic-tac-toe.

* Row
* Column
* Diagonal

This means there are 8 ways to win the standard board.

The Array starts at 0, so each combo has its own unique winning array (for example: line 1 diagonal will be 0, 1, 2 as a win across).

![screenshot](https://i.postimg.cc/QtVmjHX3/Local-Boards-Game.png)

__*Various Code Snippets Below:*__

**Variables:**

```
  const player1 = 'X'
  const player2 = 'O'

  let isPlayerOneTurn = true
  let movesMade = 0

  const $sqr = $('.square')
  let $winnerContainer = $('.winner')
  let $reset = $(‘#resetButton')
```

**Functions:**

```
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
```
**Check for Winner:**
```
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

```
![screenshot](https://i.postimg.cc/YCkxhXp8/Local-Boards0-Wins.png)

**Win Conditions & Winning Combinations:**
```
if (movesMade > 4) {
    XX //   let moves = Array.slice.call($(‘.square')) XX
let results = moves.map(function(square) {
return square.innerHTML
})
let winningCombos = [
     [0,1,2],
     [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
    }
  }
```
![screenshot](https://i.postimg.cc/sfkmRjqk/Overall-Win-Player0.png)

**Possible Check for Winner:**
```
function allChecked(indexes) {
  return indexes.every(
    function(index) {
      return board[index].textContent === "X";
    }
  };
}

```
**Then "If Statement" Would Be:**
```
if (allChecked([0, 1, 2]) || allChecked([3, 4, 5]) || allChecked([6, 7, 8])) {
  alert("Win")
}
Utilizing the winConditions array, the code would be e.g.
if (winConditions.some(allChecked)) {
  alert("Win")
}
```
![screenshot](https://i.postimg.cc/N0dbh1vD/Local-Board-Winner-X.png)

**Reset Button:**
```
  $reset.on('click', function(event){
   let moves = array.prototype.slice.call($('.square'))
 movesMade.map((m) => {
   m.innerHTML= ''
 })
 $winnerContainer.html('')
$winnerContainer.css('display','none')
 currentTurn = 1
movesMade = 0
})
```
![screenshot](https://i.postimg.cc/cJxT5F26/Global-Score-Draw.png)

## Look Back: :eyes:

**Styling:**

*Color psychology -* I used CSS3 to style the game. I initially recieved from critical feedback regarding my "girly" color choice and use of hearts. Despite the fact that it is impossible to draw absolute generalisations between women and men, there are some overall differences in color attraction. For example, teenage girls seem to show a preference towards pink, purple and “feminine” colours.
I feel it is important to design games that appeal to girls of this age range to encourage them to build an interest in tech, a realm where they may not generally see things that appeal to them regularly.

*Dyanmic Elements -* I added unique sounds upon each board click - as well as upon local wins, ultimate wins and game draws - with Javascript, in order to keep the game lighthearted and fun. 

*Ultimate Grid -* One of the most challenging pieces to style was the board itself, as I had to use Flexbox to ensure that the 3 x 3 grid fit within the larger 3 x 3 game board (9 squares each and 81 total) was displayed on the screen with the right orientation. I had to ensure that each indiviual grid would change colors to reflect the winnter of the local board as well.

**Challenges/ Known Bugs:** 

As this was my first ever JavaScript task, I found the project challenging. I had to learn JavaScript coding skills while creating the game (i.e. declaring global variable and functions) and learn coder's skills outside of the code (i.e. mind mapping, coding solutions and pre-planning the code to be written).

*Reset-* I ran out of time to update my Reset Button to clear the local and ultimate scoreboards, it currently only clears the gameboard itself. At the moment, users have to reload the page in order to reset the entire game. 

*Win Colors-* I also had trouble figuring out how to make a win for X to become a different color than a win for 0. 

*CSS-* Lastly, the local winner scoreboard does not wrap it's text properly which shifts the game board after displaying the winner.

**Wins:**

*Cue Fortnite style dance!*

- [x]   Creating a functional game using vanilla Javascript
- [x]   Learning how to manipulate the DOM by adding interactive components
- [x]   Practicing Flexbox and CSS to create a unique design layout

## Roadmap: :telescope:

**Future Features:** 

* Timer clock 

* Countdown score keeper 

* Reset game button - to change local & ultimate scoreboards

* Color Change - change colors of local board during win for X versus win for O

* Change X- for computer user 1 to O and vice versa upon game 2

**Advance Features to Add:**

* Login feature with user profiles

* Different rounds and different difficulty levels with even more boards

* Keep score of "best out of three" games

* Responsive design and styling-  being able to play the game on mobile or tablet.

**Key Learnings:**

- This project helped me in learning to code a project from the ground up by starting from little more than an idea on how to make the project work.

- I had to break the game into multiple smaller parts and then take these challenges step-by-step, while thinking about how to solve them simultaneously.

- Another valuable skill I learned was how to be time conscience when bug fixing without losing site of the overall project timeline.

- Despite the obvious challenges as a brand new developer, I really enjoyed seeing my work come together in this game.

## Optimizations for Accessibility :wheelchair:

I would like to now work on refactoring a number of project elements in order to improve the game's performance.

An item of main importance is for me to ensure that it is fully optimized for accessibility, seeing as inclusive design and accessible tech are very important to me. I am in the process of learning as much as possible about the topic and I would like to apply it to this game.

*This will include:*

* Descriptions- Alt text to describe the game
* Color- Imagery and colors for color blindness
*  Audio Cues- 3D audio cues to provide additional spatial information on the game 
* Sound seperation- Separate the speech and sound effect's volume controls
* Remappable keys- Allowing users to use space bar or another control to begin their turn instead of clicking on each grid
* Tutorial walkthrough - Repeatable written and audio instructions

## Authors :pencil2:

- [@marycerasa](https://www.github.com/marycerasa)

