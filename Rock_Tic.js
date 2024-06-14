const squares = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3'), document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6'), document.getElementById('square7'), document.getElementById('square8'), document.getElementById('square9')]
const moveNumbers = [document.getElementById('moveNumber1'), document.getElementById('moveNumber2'), document.getElementById('moveNumber3'), document.getElementById('moveNumber4'), document.getElementById('moveNumber5'), document.getElementById('moveNumber6'), document.getElementById('moveNumber7'), document.getElementById('moveNumber8'), document.getElementById('moveNumber9')]
let turnNumber = 1;
const turnHeader = document.getElementById('turn')
let validRockMoves = [true, true, true, true, true, true, true, true, true]
let validPaperMoves = [true, true, true, true, true, true, true, true, true]
let validScissorsMoves = [true, true, true, true, true, true, true, true, true]
let wait = false
//validRockMoves = [false, true, false, false, false, false, false, false, false]
// validPaperMoves = [false, false, false, false, false, true, false, false, false]
// validScissorsMoves = [false, false, true, false, true, false, false, false, false]

function turnIncrementOld() {
  turnNumber++
  if (turnNumber%3 === 1) {
    turnHeader.textContent = "Rock's Turn";
  } else if (turnNumber%3 === 2) {
    turnHeader.textContent = "Paper's Turn"
  } else {
    turnHeader.textContent = "Scissors' Turn";
  }
  checkForValidMoveOld()
}

function checkForValidMoveOld() {
  if (!checkForSquareWinOld()) {
    if (turnNumber%3 === 1) {
      for (let i = 0; i < validRockMoves.length; i++) {
        if (validRockMoves[i]) {
          break
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Rock'
          wait = true
          setTimeout(() => {
            turnIncrementOld()
            wait = false
          }, 2000)
          break
        }
      }
    } else if (turnNumber%3 === 2) {
      for (let i = 0; i < validPaperMoves.length; i++) {
        if (validPaperMoves[i]) {
          break
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Paper'
          wait = true
          setTimeout(() => {
            turnIncrementOld()
            wait = false
          }, 2000)
          break
        }
      } 
    } else {  
      for (let i = 0; i < validScissorsMoves.length; i++) {
        if (validScissorsMoves[i]) {
          break
        } else if (i === 8){
          turnHeader.textContent = 'No Valid Move For Scissors'
          wait = true
          setTimeout(() => {
            turnIncrementOld()
            wait = false
          }, 2000)
          break
        }
      } 
    }
  }
}

function updateSquareOld(square) {
  moveNumbers[square].textContent++
  if (turnNumber%3 === 1) {
    squares[square].setAttribute('src', 'Rock.jpeg')
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
    squares[square].setAttribute('src', 'Paper.svg')
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
    squares[square].setAttribute('src', 'Scissors.svg')
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
        if (squares[i].getAttribute('src') === 'Rock.jpeg') {
          validPaperMoves[i] = true
        } else if (squares[i].getAttribute('src') === 'Paper.svg') {
          validScissorsMoves[i] = true
        } else if (squares[i].getAttribute('src') === 'Scissors.svg') {
          validRockMoves[i] = true
        }
      }
    }
  } 
  squares[square].classList.replace('blankSquare', 'square');
  turnIncrementOld()
  if (checkForSquareWinOld()) {
    document.getElementById('again').textContent = "Play Again?"
  }
}


function checkForSquareWinOld() {
  for (let i = 0; i < 7; i += 3) {
    if ((squares[i].getAttribute('src') === squares[i+1].getAttribute('src')) && (squares[i+1].getAttribute('src') === squares[i+2].getAttribute('src')) && (squares[i].getAttribute('src') !== 'Blank.svg')) {
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
      if ((squares[i].getAttribute('src') === squares[i+3].getAttribute('src')) && (squares[i+3].getAttribute('src') === squares[i+6].getAttribute('src')) && (squares[i].getAttribute('src') !== 'Blank.svg')) {
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

  if ((squares[0].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[8].getAttribute('src')) && (squares[0].getAttribute('src') !== 'Blank.svg')) {
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

  if ((squares[2].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[6].getAttribute('src')) && (squares[2].getAttribute('src') !== 'Blank.svg')) {
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

function checkIfMoveIsValidOld(square) {

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
    updateSquareOld(square)
  } else {
    document.getElementById('valid').textContent = "Not a Valid Move"
  }
}

squares[0].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(0);
  }
}
squares[1].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(1);
  }
}
squares[2].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(2);
  }
}
squares[3].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(3);
  }
}
squares[4].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(4);
  }
}
squares[5].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(5);
  }
}
squares[6].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(6);
  }
}
squares[7].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(7);
  }
}
squares[8].onclick = () => {
  if (!checkForSquareWinOld() && !wait) {
    checkIfMoveIsValidOld(8);
  }
}

function resetOld() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute('src', 'Blank.svg')
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
}
document.getElementById('again').onclick = () => {
  resetOld()
}
