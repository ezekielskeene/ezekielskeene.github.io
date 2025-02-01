const squares = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3'), document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6'), document.getElementById('square7'), document.getElementById('square8'), document.getElementById('square9')]
const moveNumbers = [document.getElementById('moveNumber1'), document.getElementById('moveNumber2'), document.getElementById('moveNumber3'), document.getElementById('moveNumber4'), document.getElementById('moveNumber5'), document.getElementById('moveNumber6'), document.getElementById('moveNumber7'), document.getElementById('moveNumber8'), document.getElementById('moveNumber9')]
let moveNumbersValue = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let gameSeeds = ['01220032113887765544356']
let currentBoard = 0
//gameState = [0, 1, 2, 2, 0, 0, 3, 2, 1, 1, 3, 8, 8, 7, 7, 6, 5, 5, 4, 4, 3, 5, 6]
let turnNumberTemporary = 1;
const turnHeader = document.getElementById('turn')
let validRockMoves = [true, true, true, true, true, true, true, true, true]
let validPaperMoves = [true, true, true, true, true, true, true, true, true]
let validScissorsMoves = [true, true, true, true, true, true, true, true, true]
let currentTurn = 0;
let isPlaying = false;

function evaluateSeed(seed) {
    let seedArray = []
    for (let i = 0; i < seed.length; i++) {
        seedArray.push(seed[i])
    }
    return seedArray
}

function giveSeed(gameArray) {
    let seed = ''
    for (let i = 0; i < gameArray.length; i++) {
        seed = seed+gameArray[i]
    }
    return seed
}

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('playMatch').onclick = async () => {
    if (!isPlaying) {
        if (currentTurn === gameSeeds[currentBoard].length) {
            resetBoard(true)
        }
        document.getElementById('playMatch').textContent = 'Pause Match'
        isPlaying = true;
        for (let i = currentTurn; i <= gameSeeds[currentBoard].length; i++) {
            if (isPlaying) {
                visualizeGame(gameSeeds[currentBoard], i);
                await sleep(800)
            } else {
                break
            }
        }
        isPlaying = false
        document.getElementById('playMatch').textContent = 'Play Match'
    } else {
        isPlaying = false
        document.getElementById('playMatch').textContent = 'Play Match'
    }
}
document.getElementById('moveLeft').onclick = () => {
    isPlaying = false
    if (currentTurn !== 0) {
        visualizeGame(gameSeeds[currentBoard], currentTurn-1);
    }
}
document.getElementById('toStart').onclick = () => {
    isPlaying = false
    resetBoard(false)
}
document.getElementById('moveRight').onclick = () => {
    isPlaying = false
    if (currentTurn !== gameSeeds[currentBoard].length) {
        visualizeGame(gameSeeds[currentBoard], currentTurn+1);
    }
}
document.getElementById('toEnd').onclick = () => {
    isPlaying = false
    visualizeGame(gameSeeds[currentBoard], gameSeeds[currentBoard].length);
}
document.getElementById('nextGame').onclick = () => {
    isPlaying = false
    if (currentBoard+1 < gameSeeds.length) {
        currentBoard++
    }
    visualizeGame(gameSeeds[currentBoard], gameSeeds[currentBoard].length);
    document.getElementById('gameCounter').textContent = 'Game ' + (currentBoard+1)
}
document.getElementById('previousGame').onclick = () => {
    isPlaying = false
    if (currentBoard !== 0) {
        currentBoard--
    }
    visualizeGame(gameSeeds[currentBoard], gameSeeds[currentBoard].length);
    document.getElementById('gameCounter').textContent = 'Game ' + (currentBoard+1)
}
document.getElementById('again').onclick = () => {
    isPlaying = false   
    trueReset()
}
document.getElementById('test').onclick = () => {
    isPlaying = false
    simulateGame()
    currentBoard = gameSeeds.length-1
    visualizeGame(gameSeeds[currentBoard], gameSeeds[currentBoard].length)
    document.getElementById('gameCounter').textContent = 'Game ' + (currentBoard+1)
}

function simulateGame() {
    resetBoard(true)
    let gameMoves = []
    let newMove = 0;
    while(!checkForSquareWin()) {
        //alert(validRockMoves + " / " + validPaperMoves + " / " + validScissorsMoves)
        if (checkForValidMove()) {
            newMove = returnMove(gameSeeds[currentBoard])
            if (checkIfMoveIsValid(newMove)) {
                gameMoves.push(newMove)
                moveNumbersValue[newMove]++
                updateValidMoves(newMove)
                currentTurn++
            }
        } else {
            gameMoves.push(9)
            currentTurn++
        }
        visualizeGame(gameMoves, gameMoves.length)
    }
    gameSeeds.push(giveSeed(gameMoves))
}  

function returnMove(gameSeed) {
    if (currentTurn%3 === 0) {
        return returnRockMove(gameSeed)
    } else if (currentTurn%3 === 1) {
        return returnPaperMove(gameSeed)
    } else {
        return returnScissorsMove(gameSeed)
    }
}

function returnRockMove(gameSeed) {
    return Math.round(Math.random()*9)
}
function returnPaperMove(gameSeed) {
    return Math.round(Math.random()*9)
}
function returnScissorsMove(gameSeed) {
    return Math.round(Math.random()*9)
}

function checkForValidMove() {
    if (!checkForSquareWin()) {
      if (currentTurn%3 === 0) {
        for (let i = 0; i < validRockMoves.length; i++) {
          if (validRockMoves[i]) {
            return true
          } else if (i === 8){
            return false
          }
        }
      } else if (currentTurn%3 === 1) {
        for (let i = 0; i < validPaperMoves.length; i++) {
          if (validPaperMoves[i]) {
            return true
          } else if (i === 8){
            return false
          }
        } 
      } else {  
        for (let i = 0; i < validScissorsMoves.length; i++) {
          if (validScissorsMoves[i]) {
            return true
          } else if (i === 8){
            return false
          }
        } 
      }
    }
  }

function updateValidMoves(move) {
    if (currentTurn%3 === 0) {
        validRockMoves[move] = false;
        validScissorsMoves[move] = false;
        if (moveNumbersValue[move] < 3 && currentTurn > 2) {
            //alert('true' + currentTurn + ' / ' + move + " / " + moveNumbersValue[move])
            validPaperMoves[move] = true
        } else {
            //alert('false' + currentTurn + ' / ' + move + " / " + moveNumbersValue[move])
            validPaperMoves[move] = false
        }
    } else if (currentTurn%3 === 1) {
        validRockMoves[move] = false;
        validPaperMoves[move] = false;
        if (moveNumbersValue[move] < 3 && currentTurn > 2) {
            validScissorsMoves[move] = true
        } else {
            validScissorsMoves[move] = false
        }
    } else {
        validPaperMoves[move] = false;
        validScissorsMoves[move] = false;
        if (moveNumbersValue[move] < 3 && currentTurn > 2) {
            validRockMoves[move] = true
        } else {
            validRockMoves[move] = false
        }
    }
    if (currentTurn === 3) {
        for (let i = 0; i < 9; i++) {
            if (squares[i].getAttribute('src') === '/Rock.jpeg') {
              validPaperMoves[i] = true
            } else if (squares[i].getAttribute('src') === '/Paper.svg') {
              validScissorsMoves[i] = true
            } else if (squares[i].getAttribute('src') === '/Scissors.svg') {
              validRockMoves[i] = true
            }
        }
    }
}

function checkIfMoveIsValid(square) {
    let valid = true;
    if (currentTurn%3 === 0) {
      if (!validRockMoves[square]) {
        valid = false;
      }
    } else if (currentTurn%3 === 1) {
      if (!validPaperMoves[square]) {
        valid = false;
      }
    } else {
      if (!validScissorsMoves[square]) {
        valid = false;
      }
    } 
    if (valid) {
      return true
    } else {
      return false
    }
    
  }

function visualizeGame(gameSteps, gameLength) {
    resetBoard(false)
    currentTurn = gameLength;
    for (let i = 0; i < gameLength; i++) {
        updateSquare(gameSteps[i], i)
    }
    if (gameLength === gameSteps.length) {
        checkForSquareWin()
    }   
}

function updateSquare(square, currentTurn) {
    if (currentTurn%3 === 0) {
        if (square !== 9) {
            squares[square].setAttribute('src', "/Rock.jpeg")
        }
        turnHeader.textContent = "Paper's Turn"
    } else if (currentTurn%3 === 1) {
        if (square !== 9) {
            squares[square].setAttribute('src', "/Paper.svg")
        }
        turnHeader.textContent = "Scissors' Turn"
    } else {
        if (square !== 9) {
            squares[square].setAttribute('src', "/Scissors.svg")
        }
        turnHeader.textContent = "Rock's Turn"
    }
    if (square !== 9) {
        squares[square].classList.replace('blankSquare', 'square');
        moveNumbers[square].textContent++
        if (moveNumbers[square].textContent > 2) {
            moveNumbers[square].style.color = 'rgb(31, 158, 221)';
            squares[square].style.borderColor = 'rgb(31, 158, 221)';
        }
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
          if (currentTurn%3 === 1) {
            turnHeader.textContent = 'Rock Wins!'
          } else if (currentTurn%3 === 2) {
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
            if (currentTurn%3 === 1) {
              turnHeader.textContent = 'Rock Wins!'
            } else if (currentTurn%3 === 2) {
              turnHeader.textContent = 'Paper Wins!'
            } else {
              turnHeader.textContent = 'Scissors Wins!'
            } 
            return true;
        }
    }
  
    if ((squares[0].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[8].getAttribute('src')) && (squares[0].getAttribute('src') !== '/Blank.svg')) {
        document.getElementById('diagonal1').style.visibility = 'visible';
        if (currentTurn%3 === 1) {
          turnHeader.textContent = 'Rock Wins!'
        } else if (currentTurn%3 === 2) {
          turnHeader.textContent = 'Paper Wins!'
        } else {
          turnHeader.textContent = 'Scissors Wins!'
        } 
        return true;
    }
  
    if ((squares[2].getAttribute('src') === squares[4].getAttribute('src')) && (squares[4].getAttribute('src') === squares[6].getAttribute('src')) && (squares[2].getAttribute('src') !== '/Blank.svg')) {
      document.getElementById('diagonal2').style.visibility = 'visible';
      if (currentTurn%3 === 1) {
        turnHeader.textContent = 'Rock Wins!'
      } else if (currentTurn%3 === 2) {
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


function resetBoard(isTrue) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].setAttribute('src', '/Blank.svg')
      squares[i].setAttribute('alt', "")
      moveNumbers[i].textContent = 0
      squares[i].style.borderColor = 'black';
      moveNumbers[i].style.color = 'black';
      squares[i].classList.replace('square', 'blankSquare');
    }
    turnHeader.textContent = "Rock's Turn"
    document.getElementById('again').textContent = "Reset"
    document.getElementById('horizontal1').style.visibility = 'hidden';
    document.getElementById('horizontal2').style.visibility = 'hidden';
    document.getElementById('horizontal3').style.visibility = 'hidden';
    document.getElementById('vertical1').style.visibility = 'hidden';
    document.getElementById('vertical2').style.visibility = 'hidden';
    document.getElementById('vertical3').style.visibility = 'hidden';
    document.getElementById('diagonal1').style.visibility = 'hidden';
    document.getElementById('diagonal2').style.visibility = 'hidden';
    currentTurn = 0;
    if (isTrue) {
        validRockMoves = [true, true, true, true, true, true, true, true, true]
        validPaperMoves = [true, true, true, true, true, true, true, true, true]
        validScissorsMoves = [true, true, true, true, true, true, true, true, true]
        moveNumbersValue = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

}
function trueReset() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].setAttribute('src', '/Blank.svg')
      squares[i].setAttribute('alt', "")
      moveNumbers[i].textContent = 0
      squares[i].style.borderColor = 'black';
      moveNumbers[i].style.color = 'black';
      squares[i].classList.replace('square', 'blankSquare');
    }
    turnHeader.textContent = "Rock's Turn"
    document.getElementById('again').textContent = "Reset"
    document.getElementById('horizontal1').style.visibility = 'hidden';
    document.getElementById('horizontal2').style.visibility = 'hidden';
    document.getElementById('horizontal3').style.visibility = 'hidden';
    document.getElementById('vertical1').style.visibility = 'hidden';
    document.getElementById('vertical2').style.visibility = 'hidden';
    document.getElementById('vertical3').style.visibility = 'hidden';
    document.getElementById('diagonal1').style.visibility = 'hidden';
    document.getElementById('diagonal2').style.visibility = 'hidden';
    currentTurn = 0;
    gameSeeds = []
    validRockMoves = [true, true, true, true, true, true, true, true, true]
    validPaperMoves = [true, true, true, true, true, true, true, true, true]
    validScissorsMoves = [true, true, true, true, true, true, true, true, true]
    moveNumbersValue = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    document.getElementById('gameCounter').textContent = 'Game 1'
}