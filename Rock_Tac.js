const squares = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3'), document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6'), document.getElementById('square7'), document.getElementById('square8'), document.getElementById('square9')]
const moveNumbers = [document.getElementById('moveNumber1'), document.getElementById('moveNumber2'), document.getElementById('moveNumber3'), document.getElementById('moveNumber4'), document.getElementById('moveNumber5'), document.getElementById('moveNumber6'), document.getElementById('moveNumber7'), document.getElementById('moveNumber8'), document.getElementById('moveNumber9')]
let turnNumber = 1;
const turnHeader = document.getElementById('turn')
let validRockMoves = [true, true, true, true, true, true, true, true, true]
let validPaperMoves = [true, true, true, true, true, true, true, true, true]
let validScissorsMoves = [true, true, true, true, true, true, true, true, true]
let wait = false
let pictureType = 'Normal'
let currentTurn = true;
let isRockComp = false;
let isPaperComp = false;
let isScissorsComp = false;
//validRockMoves = [false, true, false, false, false, false, false, false, false]
// validPaperMoves = [false, false, false, false, false, true, false, false, false]
// validScissorsMoves = [false, false, true, false, true, false, false, false, false]

function turnIncrement() {
  turnNumber++
  if (turnNumber%3 === 1) {
    turnHeader.textContent = "Rock's Turn";
    if (isRockComp) {
      currentTurn = false;
    } else {
      currentTurn = true;
    }
  } else if (turnNumber%3 === 2) {
    turnHeader.textContent = "Paper's Turn"
    if (isPaperComp) {
      currentTurn = false;
    } else {
      currentTurn = true;
    }
  } else {
    turnHeader.textContent = "Scissors' Turn";
    if (isScissorsComp) {
      currentTurn = false;
    } else {
      currentTurn = true;
    }
  }
  if (checkForValidMove()) {
    if (!currentTurn) {
      computerMove();
    }
  }
}

function checkForValidMove() {
  if (!checkForSquareWin()) {
    if (turnNumber%3 === 1) {
      for (let i = 0; i < validRockMoves.length; i++) {
        if (validRockMoves[i]) {
          return true
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Rock'
          wait = true
          setTimeout(() => {
            turnIncrement()
            wait = false
          }, 2000)
          return false
        }
      }
    } else if (turnNumber%3 === 2) {
      for (let i = 0; i < validPaperMoves.length; i++) {
        if (validPaperMoves[i]) {
          return true
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Paper'
          wait = true
          setTimeout(() => {
            turnIncrement()
            wait = false
          }, 2000)
          return false
        }
      } 
    } else {  
      for (let i = 0; i < validScissorsMoves.length; i++) {
        if (validScissorsMoves[i]) {
          return true
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Scissors'
          wait = true
          setTimeout(() => {
            turnIncrement()
            wait = false
          }, 2000)
          return false
        }
      } 
    }
  }
}

function computerMove() {
  while (!currentTurn) {
    checkIfMoveIsValid(Math.round(Math.random()*9))
  }
}

function updateSquare(square) {
  moveNumbers[square].textContent++
  if (turnNumber%3 === 1) {
    if (pictureType === 'Normal') {
      squares[square].setAttribute('src', '/Rock.jpeg')
    } else {
      squares[square].setAttribute('src', '/RealisticRock.jpeg')
    }
    squares[square].setAttribute('alt', 'R')
    validRockMoves[square] = false
    validScissorsMoves[square] = false
    if (moveNumbers[square].textContent < 3 && turnNumber > 3) {
      validPaperMoves[square] = true
    } else if (moveNumbers[square].textContent > 2) {
      squares[square].style.borderColor = 'rgb(31, 158, 221)';
      moveNumbers[square].style.color = 'rgb(31, 158, 221)';
    } else {
      validPaperMoves[square] = false
    }
  } else if (turnNumber%3 === 2) {
    if (pictureType === 'Normal') {
      squares[square].setAttribute('src', '/Paper.svg')
    } else {
      squares[square].setAttribute('src', '/RealisticPaper.jpeg')
    }
    squares[square].setAttribute('alt', 'P')
    validRockMoves[square] = false
    validPaperMoves[square] = false
    if (moveNumbers[square].textContent < 3 && turnNumber > 3) {
      validScissorsMoves[square] = true
    } else if (moveNumbers[square].textContent > 2) {
      squares[square].style.borderColor = 'rgb(31, 158, 221)';
      moveNumbers[square].style.color = 'rgb(31, 158, 221)';
    } else {
      validScissorsMoves[square] = false
    }
  } else {
    if (pictureType === 'Normal') {
      squares[square].setAttribute('src', '/Scissors.svg')
    } else {
      squares[square].setAttribute('src', '/RealisticScissors.jpeg')
    }
    squares[square].setAttribute('alt', 'S')
    validPaperMoves[square] = false
    validScissorsMoves[square] = false
    if (moveNumbers[square].textContent < 3) {
      validRockMoves[square] = true
    } else {
      squares[square].style.borderColor = 'rgb(31, 158, 221)';
      moveNumbers[square].style.color = 'rgb(31, 158, 221)';
    }
    if (turnNumber === 3) {
      for (let i = 0; i < 9; i++) {
        if (pictureType == 'Normal') {
          if (squares[i].getAttribute('src') === '/Rock.jpeg') {
            validPaperMoves[i] = true
          } else if (squares[i].getAttribute('src') === '/Paper.svg') {
            validScissorsMoves[i] = true
          } else if (squares[i].getAttribute('src') === '/Scissors.svg') {
            validRockMoves[i] = true
          }
        } else {
          if (squares[i].getAttribute('src') === '/RealisticRock.jpeg') {
            validPaperMoves[i] = true
          } else if (squares[i].getAttribute('src') === '/RealisticPaper.svg') {
            validScissorsMoves[i] = true
          } else if (squares[i].getAttribute('src') === '/RealisticScissors.svg') {
            validRockMoves[i] = true  
          }
        }
      }
    }
  } 
  squares[square].classList.replace('blankSquare', 'square');
  turnIncrement()
  if (checkForSquareWin()) {
    document.getElementById('again').textContent = "Play Again?"
  }
}


function checkForSquareWin() {
  for (let i = 0; i < 7; i += 3) {
    if ((squares[i].getAttribute('src') === squares[i+1].getAttribute('src')) && (squares[i+1].getAttribute('src') === squares[i+2].getAttribute('src')) && (squares[i].getAttribute('src') !== '/Blank.svg')) {
        if (i === 0) {
          document.getElementById('horizontal1').style.visibility = 'visible';
        } else if (i === 3) {
          document.getElementById('horizontal2').style.visibility = 'visible';
        } else {
          document.getElementById('horizontal3').style.visibility = 'visible';
        }
        if (turnNumber%3 === 2) {
          turnHeader.textContent = 'Rock Wins!'
        } else if (turnNumber%3 === 0) {
          turnHeader.textContent = 'Paper Wins!'
        } else {
          turnHeader.textContent = 'Scissors Wins!'
        } 
        return true;
    }
  }

  for (let i = 0; i < 3; i ++) {
      if ((squares[i].getAttribute('src') === squares[i+3].getAttribute('src')) && (squares[i+3].getAttribute('src') === squares[i+6].getAttribute('src')) && (squares[i].getAttribute('src') !== '/Blank.svg')) {
        if (i === 0) {
          document.getElementById('vertical1').style.visibility = 'visible';
        } else if (i === 1) {
          document.getElementById('vertical2').style.visibility = 'visible';
        } else {
          document.getElementById('vertical3').style.visibility = 'visible';
        }
          if (turnNumber%3 === 2) {
            turnHeader.textContent = 'Rock Wins!'
          } else if (turnNumber%3 === 0) {
            turnHeader.textContent = 'Paper Wins!'
          } else {
            turnHeader.textContent = 'Scissors Wins!'
          } 
          return true;
      }
  }

  if ((squares[0].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[8].getAttribute('src')) && (squares[0].getAttribute('src') !== '/Blank.svg')) {
      document.getElementById('diagonal1').style.visibility = 'visible';
      if (turnNumber%3 === 2) {
        turnHeader.textContent = 'Rock Wins!'
      } else if (turnNumber%3 === 0) {
        turnHeader.textContent = 'Paper Wins!'
      } else {
        turnHeader.textContent = 'Scissors Wins!'
      } 
      return true;
  }

  if ((squares[2].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[6].getAttribute('src')) && (squares[2].getAttribute('src') !== '/Blank.svg')) {
    document.getElementById('diagonal2').style.visibility = 'visible';
    if (turnNumber%3 === 2) {
      turnHeader.textContent = 'Rock Wins!'
    } else if (turnNumber%3 === 0) {
      turnHeader.textContent = 'Paper Wins!'
    } else {
      turnHeader.textContent = 'Scissors Wins!'
    } 
    return true;
  }

  for (let i = 0; i < 9; i++) {
      if (validRockMoves[i] || validPaperMoves[i] || validScissorsMoves[i]) {
        return false;
      }
  }
  turnHeader.textContent = "No one wins :("
  return true;
}

function checkIfMoveIsValid(square) {
  let valid = true;
  if (turnNumber%3 === 1) {
    if (!validRockMoves[square]) {
      valid = false;
    }
  } else if (turnNumber%3 === 2) {
    if (!validPaperMoves[square]) {
      valid = false;
    }
  } else {
    if (!validScissorsMoves[square]) {
      valid = false;
    }
  } 
  if (valid) {
    document.getElementById('valid').textContent = ""
    updateSquare(square)
  } else {
    document.getElementById('valid').textContent = "Not a Valid Move"
  }
  
}


for (let i = 0; i < 9; i++) {
  squares[i].onclick = () => {
    if (!checkForSquareWin() && !wait && currentTurn) {
      checkIfMoveIsValid(i);
    }
  }
}

function reset() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute('src', '/Blank.svg')
    squares[i].setAttribute('alt', "")
    moveNumbers[i].textContent = 0
    squares[i].style.borderColor = 'black';
    moveNumbers[i].style.color = 'black';
    squares[i].classList.replace('square', 'blankSquare');
  }
  validRockMoves = [true, true, true, true, true, true, true, true, true]
  validPaperMoves = [true, true, true, true, true, true, true, true, true]
  validScissorsMoves = [true, true, true, true, true, true, true, true, true]
  turnHeader.textContent = "Rock's Turn"
  document.getElementById('again').textContent = "Reset"
  turnNumber = 1;
  document.getElementById('horizontal1').style.visibility = 'hidden';
  document.getElementById('horizontal2').style.visibility = 'hidden';
  document.getElementById('horizontal3').style.visibility = 'hidden';
  document.getElementById('vertical1').style.visibility = 'hidden';
  document.getElementById('vertical2').style.visibility = 'hidden';
  document.getElementById('vertical3').style.visibility = 'hidden';
  document.getElementById('diagonal1').style.visibility = 'hidden';
  document.getElementById('diagonal2').style.visibility = 'hidden';
  currentTurn = true;
  if (isRockComp) {
    currentTurn = false;
    computerMove();
  }
}
document.getElementById('again').onclick = () => {
  reset()
}
document.getElementById('pictureSwap').onclick = () => {
  if (pictureType === 'Normal') {
    for (let i = 0; i < 9; i++) {
      if (squares[i].getAttribute('src') === '/Rock.jpeg') {
        squares[i].setAttribute('src', '/RealisticRock.jpeg')
      } else if (squares[i].getAttribute('src') === '/Paper.svg') {
        squares[i].setAttribute('src', '/RealisticPaper.jpeg')
      } else if (squares[i].getAttribute('src') === '/Scissors.svg') {
        squares[i].setAttribute('src', '/RealisticScissors.jpeg')
      }
    }
    pictureType = 'Realistic'
  } else {
    for (let i = 0; i < 9; i++) {
      if (squares[i].getAttribute('src') === '/RealisticRock.jpeg') {
        squares[i].setAttribute('src', '/Rock.jpeg')
      } else if (squares[i].getAttribute('src') === '/RealisticPaper.jpeg') {
        squares[i].setAttribute('src', '/Paper.svg')
      } else if (squares[i].getAttribute('src') === '/RealisticScissors.jpeg') {
        squares[i].setAttribute('src', '/Scissors.svg')
      }
    }
    pictureType = 'Normal'
  }
  
}

document.getElementById('rockComp').onclick = () => {
  if (!(isPaperComp && isScissorsComp)){
    isRockComp = !isRockComp;
    if (isRockComp) {
      document.getElementById('rockCompIndicator').style.backgroundColor = 'aqua'
    } else {
      document.getElementById('rockCompIndicator').style.backgroundColor = 'white'
    }
  }
}
document.getElementById('paperComp').onclick = () => {
  if (!(isRockComp && isScissorsComp)) {
    isPaperComp = !isPaperComp;
    if (isPaperComp) {
      document.getElementById('paperCompIndicator').style.backgroundColor = 'aqua'
    } else {
      document.getElementById('paperCompIndicator').style.backgroundColor = 'white'
    }
  }
}
document.getElementById('scissorsComp').onclick = () => {
  if (!(isRockComp && isPaperComp)) {
    isScissorsComp = !isScissorsComp;
    if (isScissorsComp) {
      document.getElementById('scissorsCompIndicator').style.backgroundColor = 'aqua'
    } else {
      document.getElementById('scissorsCompIndicator').style.backgroundColor = 'white'
    }
  }
}
