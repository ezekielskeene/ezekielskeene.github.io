const squares1 = [document.getElementById('square1-1'), document.getElementById('square1-2'), document.getElementById('square1-3'), document.getElementById('square1-4'), document.getElementById('square1-5'), document.getElementById('square1-6'), document.getElementById('square1-7'), document.getElementById('square1-8'), document.getElementById('square1-9')]
const squares2 = [document.getElementById('square2-1'), document.getElementById('square2-2'), document.getElementById('square2-3'), document.getElementById('square2-4'), document.getElementById('square2-5'), document.getElementById('square2-6'), document.getElementById('square2-7'), document.getElementById('square2-8'), document.getElementById('square2-9')]
const squares3 = [document.getElementById('square3-1'), document.getElementById('square3-2'), document.getElementById('square3-3'), document.getElementById('square3-4'), document.getElementById('square3-5'), document.getElementById('square3-6'), document.getElementById('square3-7'), document.getElementById('square3-8'), document.getElementById('square3-9')]
const squares4 = [document.getElementById('square4-1'), document.getElementById('square4-2'), document.getElementById('square4-3'), document.getElementById('square4-4'), document.getElementById('square4-5'), document.getElementById('square4-6'), document.getElementById('square4-7'), document.getElementById('square4-8'), document.getElementById('square4-9')]
const squares5 = [document.getElementById('square5-1'), document.getElementById('square5-2'), document.getElementById('square5-3'), document.getElementById('square5-4'), document.getElementById('square5-5'), document.getElementById('square5-6'), document.getElementById('square5-7'), document.getElementById('square5-8'), document.getElementById('square5-9')]
const squares6 = [document.getElementById('square6-1'), document.getElementById('square6-2'), document.getElementById('square6-3'), document.getElementById('square6-4'), document.getElementById('square6-5'), document.getElementById('square6-6'), document.getElementById('square6-7'), document.getElementById('square6-8'), document.getElementById('square6-9')]
const squares7 = [document.getElementById('square7-1'), document.getElementById('square7-2'), document.getElementById('square7-3'), document.getElementById('square7-4'), document.getElementById('square7-5'), document.getElementById('square7-6'), document.getElementById('square7-7'), document.getElementById('square7-8'), document.getElementById('square7-9')]
const squares8 = [document.getElementById('square8-1'), document.getElementById('square8-2'), document.getElementById('square8-3'), document.getElementById('square8-4'), document.getElementById('square8-5'), document.getElementById('square8-6'), document.getElementById('square8-7'), document.getElementById('square8-8'), document.getElementById('square8-9')]
const squares9 = [document.getElementById('square9-1'), document.getElementById('square9-2'), document.getElementById('square9-3'), document.getElementById('square9-4'), document.getElementById('square9-5'), document.getElementById('square9-6'), document.getElementById('square9-7'), document.getElementById('square9-8'), document.getElementById('square9-9')]
const squares = [squares1, squares2, squares3, squares4, squares5, squares6, squares7, squares8, squares9]
const moveNumbers1 = [document.getElementById('moveNumber1-1'), document.getElementById('moveNumber1-2'), document.getElementById('moveNumber1-3'), document.getElementById('moveNumber1-4'), document.getElementById('moveNumber1-5'), document.getElementById('moveNumber1-6'), document.getElementById('moveNumber1-7'), document.getElementById('moveNumber1-8'), document.getElementById('moveNumber1-9')]
const moveNumbers2 = [document.getElementById('moveNumber2-1'), document.getElementById('moveNumber2-2'), document.getElementById('moveNumber2-3'), document.getElementById('moveNumber2-4'), document.getElementById('moveNumber2-5'), document.getElementById('moveNumber2-6'), document.getElementById('moveNumber2-7'), document.getElementById('moveNumber2-8'), document.getElementById('moveNumber2-9')]
const moveNumbers3 = [document.getElementById('moveNumber3-1'), document.getElementById('moveNumber3-2'), document.getElementById('moveNumber3-3'), document.getElementById('moveNumber3-4'), document.getElementById('moveNumber3-5'), document.getElementById('moveNumber3-6'), document.getElementById('moveNumber3-7'), document.getElementById('moveNumber3-8'), document.getElementById('moveNumber3-9')]
const moveNumbers4 = [document.getElementById('moveNumber4-1'), document.getElementById('moveNumber4-2'), document.getElementById('moveNumber4-3'), document.getElementById('moveNumber4-4'), document.getElementById('moveNumber4-5'), document.getElementById('moveNumber4-6'), document.getElementById('moveNumber4-7'), document.getElementById('moveNumber4-8'), document.getElementById('moveNumber4-9')]
const moveNumbers5 = [document.getElementById('moveNumber5-1'), document.getElementById('moveNumber5-2'), document.getElementById('moveNumber5-3'), document.getElementById('moveNumber5-4'), document.getElementById('moveNumber5-5'), document.getElementById('moveNumber5-6'), document.getElementById('moveNumber5-7'), document.getElementById('moveNumber5-8'), document.getElementById('moveNumber5-9')]
const moveNumbers6 = [document.getElementById('moveNumber6-1'), document.getElementById('moveNumber6-2'), document.getElementById('moveNumber6-3'), document.getElementById('moveNumber6-4'), document.getElementById('moveNumber6-5'), document.getElementById('moveNumber6-6'), document.getElementById('moveNumber6-7'), document.getElementById('moveNumber6-8'), document.getElementById('moveNumber6-9')]
const moveNumbers7 = [document.getElementById('moveNumber7-1'), document.getElementById('moveNumber7-2'), document.getElementById('moveNumber7-3'), document.getElementById('moveNumber7-4'), document.getElementById('moveNumber7-5'), document.getElementById('moveNumber7-6'), document.getElementById('moveNumber7-7'), document.getElementById('moveNumber7-8'), document.getElementById('moveNumber7-9')]
const moveNumbers8 = [document.getElementById('moveNumber8-1'), document.getElementById('moveNumber8-2'), document.getElementById('moveNumber8-3'), document.getElementById('moveNumber8-4'), document.getElementById('moveNumber8-5'), document.getElementById('moveNumber8-6'), document.getElementById('moveNumber8-7'), document.getElementById('moveNumber8-8'), document.getElementById('moveNumber8-9')]
const moveNumbers9 = [document.getElementById('moveNumber9-1'), document.getElementById('moveNumber9-2'), document.getElementById('moveNumber9-3'), document.getElementById('moveNumber9-4'), document.getElementById('moveNumber9-5'), document.getElementById('moveNumber9-6'), document.getElementById('moveNumber9-7'), document.getElementById('moveNumber9-8'), document.getElementById('moveNumber9-9')]
const moveNumbers = [moveNumbers1, moveNumbers2, moveNumbers3, moveNumbers4, moveNumbers5, moveNumbers6, moveNumbers7, moveNumbers8, moveNumbers9]
let turnNumber = 1;
const bigSquares = [document.getElementById('bigSquare1'), document.getElementById('bigSquare2'), document.getElementById('bigSquare3'), document.getElementById('bigSquare4'), document.getElementById('bigSquare5'), document.getElementById('bigSquare6'), document.getElementById('bigSquare7'), document.getElementById('bigSquare8'), document.getElementById('bigSquare9')]
const turnHeader = document.getElementById('turnU')
let bigSquareValues = ['', '', '', '', '', '', '', '', '']
let activeSquare = false
let fullSquares = [false, false, false, false, false, false, false, false, false]

let validRockMoves = [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]]
let validPaperMoves = [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]]
let validScissorsMoves = [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]]
let wait = false
let pictureType = 'Normal'
// for (let i = 0; i < 9; i++)  {
//     for (let j = 0; j < 9; j++)  {
//         validRockMoves[i][j] = false
//         validPaperMoves[i][j] = false
//         validScissorsMoves[i][j] = false
//     }
// }

//-------------------------------------------------------------------------------------------------

function turnIncrement(i) {
    turnNumber++
    if (turnNumber%3 === 1) {
      turnHeader.textContent = "Rock's Turn";
    } else if (turnNumber%3 === 2) {
      turnHeader.textContent = "Paper's Turn"
    } else {
      turnHeader.textContent = "Scissors' Turn";
    }
    checkForValidMove()
    if (checkForWin()) {
        if (turnNumber%3 === 2) {
            turnHeader.textContent = "Rock Wins!";
        } else if (turnNumber%3 === 0) {
            turnHeader.textContent = "Paper Wins!";
        } else {
            turnHeader.textContent = "Scissors Wins!";
        }
    }
    checkForWin()
}

function checkForValidMove() {
    if (!checkForWin()) {
        if (turnNumber%3 === 1) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (validRockMoves[i][j]) {
                        break
                    } else if (i === 8 && j === 8){
                        turnHeader.textContent = 'No Valid Move For Rock'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
            if (!fullSquares[activeSquare]) {
                for (let i = 0; i < 9; i++) {
                    if (validRockMoves[activeSquare][i]) {
                        break
                    } else if (i === 8) {
                        turnHeader.textContent = 'No Valid Move For Rock'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
        } else if (turnNumber%3 === 2) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (validPaperMoves[i][j]) {
                        break
                    } else if (i === 8 && j === 8){
                        turnHeader.textContent = 'No Valid Move For Paper'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
            if (!fullSquares[activeSquare]) {
                for (let i = 0; i < 9; i++) {
                    if (validPaperMoves[activeSquare][i]) {
                        break
                    } else if (i === 8) {
                        turnHeader.textContent = 'No Valid Move For Paper'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
        } else {  
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (validScissorsMoves[i][j]) {
                        break
                    } else if (i === 8 && j === 8){
                        turnHeader.textContent = 'No Valid Move For Scissors'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
            if (!fullSquares[activeSquare]) {
                for (let i = 0; i < 9; i++) {
                    if (validScissorsMoves[activeSquare][i]) {
                        break
                    } else if (i === 8) {
                        turnHeader.textContent = 'No Valid Move For Scissors'
                        wait = true
                        setTimeout(() => {
                            turnIncrement()
                            wait = false
                        }, 2000)
                        break
                    }
                }
            }
        }
      }
}

function checkIfMoveIsValid(i, j) {
    if (turnNumber%3 === 1) {
        if (fullSquares[activeSquare]) {
            if (fullSquares[i]) {
                return false
            } else if (validRockMoves[i][j]) {
                return true
            }
        } else if (i === activeSquare || turnNumber === 1) {
            if (validRockMoves[i][j]) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else if (turnNumber%3 === 2) {
        if (fullSquares[activeSquare]) {
            if (fullSquares[i]) {
                return false
            } else if (validPaperMoves[i][j]) {
                return true
            }
        } else if (i === activeSquare || turnNumber === 1){
            if (validPaperMoves[i][j]) {
                return true
            } else {
                return false
            }
        } else {
            return false;
        }
    } else {
        if (fullSquares[activeSquare]) {
            if (fullSquares[i]) {
                return false
            } else if (validScissorsMoves[i][j]) {
                return true
            }
        } else if (i === activeSquare || turnNumber === 1){
            if (validScissorsMoves[i][j]) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

function checkForSquareWin(i) {
    for (let j = 0; j < 7; j += 3) {
        if ((squares[i][j].getAttribute('src') === squares[i][j+1].getAttribute('src')) && (squares[i][j+1].getAttribute('src') === squares[i][j+2].getAttribute('src')) && (squares[i][j].getAttribute('src') !== '/Blank.svg')) {
            fullSquares[i] = true
            updateWinSquares(i)
            return true;
        }
    }
    for (let j = 0; j < 3; j ++) {
        if ((squares[i][j].getAttribute('src') === squares[i][j+3].getAttribute('src')) && (squares[i][j+3].getAttribute('src') === squares[i][j+6].getAttribute('src')) && (squares[i][j].getAttribute('src') !== '/Blank.svg')) {
            fullSquares[i] = true
            updateWinSquares(i)  
            return true;
        }
    }
    if ((squares[i][0].getAttribute('src') === squares[i][4].getAttribute('src')) && (squares[i][4].getAttribute('src') === squares[i][8].getAttribute('src')) && (squares[i][0].getAttribute('src') !== '/Blank.svg')) {   
        fullSquares[i] = true
        updateWinSquares(i)  
        return true;
    }
    if ((squares[i][2].getAttribute('src') === squares[i][4].getAttribute('src')) && (squares[i][4].getAttribute('src') === squares[i][6].getAttribute('src')) && (squares[i][2].getAttribute('src') !== '/Blank.svg')) {
        fullSquares[i] = true
        updateWinSquares(i)
        return true;
    }
    for (let j = 0; j < 9; j++) {
        if (validRockMoves[i][j] || validPaperMoves[i][j] || validScissorsMoves[i][j]) {
            return false;
        }
    }
    fullSquares[i] = true;
    return true;
}

function checkForWin() {
    for (let i = 0; i < 7; i += 3) {
        if ((bigSquareValues[i] === bigSquareValues[i+1]) && bigSquareValues[i+1] === bigSquareValues[i+2] && bigSquareValues[i] !== '') {
            if (i === 0) {
                document.getElementById('horizontalU1').style.visibility = 'visible'
            } else if (i === 3) {
                document.getElementById('horizontalU2').style.visibility = 'visible'
            } else {
                document.getElementById('horizontalU3').style.visibility = 'visible'
            }
            document.getElementById('againU').textContent = "Play Again?"
            document.getElementById('validU').textContent = ''
            return true;
        }
    }
    for (let i = 0; i < 3; i ++) {
        if ((bigSquareValues[i] === bigSquareValues[i+3]) && bigSquareValues[i+3] === bigSquareValues[i+6] && bigSquareValues[i] !== '') {
            if (i === 0) {
                document.getElementById('verticalU1').style.visibility = 'visible'
            } else if (i === 1) {
                document.getElementById('verticalU2').style.visibility = 'visible'
            } else {
                document.getElementById('verticalU3').style.visibility = 'visible'
            }
            document.getElementById('againU').textContent = "Play Again?"
            document.getElementById('validU').textContent = ''
            return true;
        }
    }
    if (bigSquareValues[0] === bigSquareValues[4] && bigSquareValues[4] === bigSquareValues[8] && bigSquareValues[0] !== '') {   
        document.getElementById('diagonalU1').style.visibility = 'visible'
        document.getElementById('validU').textContent = ''
        document.getElementById('againU').textContent = "Play Again?"
        return true;
    }
    if (bigSquareValues[2] === bigSquareValues[4] && bigSquareValues[4] === bigSquareValues[6] && bigSquareValues[2] !== '') {
        document.getElementById('diagonalU2').style.visibility = 'visible'
        document.getElementById('validU').textContent = ''
        document.getElementById('againU').textContent = "Play Again?"
        return true;
    }
    let check1 = false
    let check2 = false
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (validRockMoves[i][j] || validPaperMoves[i][j] || validScissorsMoves[i][j]) {
                check1 = true
            }
        }
        if (!fullSquares[i]) {
            check2 = true
        }
    }
    if (check1 && check2) {
        return false
    }
    turnHeader.textContent = 'No One Wins :('
    document.getElementById('validU').textContent = ''
    document.getElementById('againU').textContent = "Play Again?"
    return true
}

function updateSquare (i, j) {
    moveNumbers[i][j].textContent++
    if (turnNumber%3 === 1) {
        if (pictureType === 'Normal') {
            squares[i][j].setAttribute('src', '/Rock.jpeg')
        } else {
            squares[i][j].setAttribute('src', '/RealisticRock.jpeg')
        }
        squares[i][j].setAttribute('alt', 'R')
        validRockMoves[i][j] = false;
        validScissorsMoves[i][j] = false
        if (moveNumbers[i][j].textContent < 3 && turnNumber > 3) {
            validPaperMoves[i][j] = true
        } else if (moveNumbers[i][j].textContent > 2) {
            squares[i][j].style.borderColor = 'rgb(31, 158, 221)';
            moveNumbers[i][j].style.color = 'rgb(31, 158, 221)';
        } else if (turnNumber < 3) {
            validPaperMoves[i][j] = false
        }
    } else if (turnNumber%3 === 2) {
        if (pictureType === 'Normal') {
            squares[i][j].setAttribute('src', '/Paper.svg')
        } else {
            squares[i][j].setAttribute('src', '/RealisticPaper.jpeg')
        }
        squares[i][j].setAttribute('alt', 'P')
        validRockMoves[i][j] = false;
        validPaperMoves[i][j] = false
        if (moveNumbers[i][j].textContent < 3 && turnNumber > 3) {
            validScissorsMoves[i][j] = true
        } else if (moveNumbers[i][j].textContent > 2) {
            squares[i][j].style.borderColor = 'rgb(31, 158, 221)';
            moveNumbers[i][j].style.color = 'rgb(31, 158, 221)';
        } else if (turnNumber < 3) {
            validScissorsMoves[i][j] = false
        }
    } else {
        if (pictureType === 'Normal') {
            squares[i][j].setAttribute('src', '/Scissors.svg')
        } else {
            squares[i][j].setAttribute('src', '/RealisticScissors.jpeg')
        }
        squares[i][j].setAttribute('alt', 'S')
        validPaperMoves[i][j] = false;
        validScissorsMoves[i][j] = false
        if (moveNumbers[i][j].textContent < 3 && turnNumber > 3) {
            validRockMoves[i][j] = true
        } else if (moveNumbers[i][j].textContent > 2) {
            squares[i][j].style.borderColor = 'rgb(31, 158, 221)';
            moveNumbers[i][j].style.color = 'rgb(31, 158, 221)';
        } else if (turnNumber < 3) {
            validRockMoves[i][j] = false
        }
    }
    if (turnNumber === 3) {
        for (let I = 0; I < 9; I++) {
            for (let J = 0; J < 9; J++) {
                if (pictureType === 'Normal') {
                    if (squares[I][J].getAttribute('src') === '/Rock.jpeg') {
                        validPaperMoves[I][J] = true
                    } else if (squares[I][J].getAttribute('src') === '/Paper.svg') {
                        validScissorsMoves[I][J] = true
                    } else if (squares[I][J].getAttribute('src') === '/Scissors.svg') {
                        validRockMoves[I][J] = true
                    }
                } else {
                    if (squares[I][J].getAttribute('src') === '/RealisticRock.jpeg') {
                        validPaperMoves[I][J] = true
                    } else if (squares[I][J].getAttribute('src') === '/RealisticPaper.jpeg') {
                        validScissorsMoves[I][J] = true
                    } else if (squares[I][J].getAttribute('src') === '/RealisticScissors.jpeg') {
                        validRockMoves[I][J] = true
                    }
                }
            }
        }
        
    }
    squares[i][j].classList.replace('blankSquareU', 'squareU');
    checkForSquareWin(i)
    setSquareToActive(j)
    document.getElementById('validU').textContent = ""
    activeSquare = j
    turnIncrement(i);
}


for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
        squares[i][j].addEventListener('click', () => {
            if (checkIfMoveIsValid(i, j) && !checkForWin()) {
                updateSquare(i, j)
            } else if (!checkForWin()) {
                document.getElementById('validU').textContent = "Not A Valid Move"
            }

        })
    }
}


document.getElementById('againU').onclick = () => {
  reset()
}

function reset() {
    for (let i = 0; i < 9; i++) {
        bigSquares[i].classList.replace('active', 'notActive')
        activeCovers[i].style.visibility = 'hidden'
        for (let j = 0; j < 9; j++) {
            squares[i][j].setAttribute('src', '/Blank.svg')
            squares[i][j].setAttribute('alt', '')
            moveNumbers[i][j].textContent = 0
            validRockMoves[i][j] = true
            validPaperMoves[i][j] = true
            validScissorsMoves[i][j] = true
            squares[i][j].classList.replace('squareU', 'blankSquareU');
            squares[i][j].style.borderColor = 'black';
            moveNumbers[i][j].style.color = 'black';
        }
        rockWinSquares[i].style.visibility = 'hidden'
        paperWinSquares[i].style.visibility = 'hidden'
        scissorsWinSquares1[i].style.visibility = 'hidden'
        scissorsWinSquares2[i].style.visibility = 'hidden'
        bigSquares[i].classList.replace('active', 'notActive')
        bigSquareValues[i] = ''
        fullSquares[i] = false
    }
    turnNumber = 1
    turnHeader.textContent = "Rock's Turn"
    activeSquare = false
    document.getElementById('againU').textContent = "Reset"
    document.getElementById('horizontalU1').style.visibility = 'hidden'
    document.getElementById('horizontalU2').style.visibility = 'hidden'
    document.getElementById('horizontalU3').style.visibility = 'hidden'
    document.getElementById('verticalU1').style.visibility = 'hidden'
    document.getElementById('verticalU2').style.visibility = 'hidden'
    document.getElementById('verticalU3').style.visibility = 'hidden'
    document.getElementById('diagonalU1').style.visibility = 'hidden'
    document.getElementById('diagonalU2').style.visibility = 'hidden'
}

const rockWinSquares = [document.getElementById('rock1'), document.getElementById('rock2'), document.getElementById('rock3'), document.getElementById('rock4'), document.getElementById('rock5'), document.getElementById('rock6'), document.getElementById('rock7'), document.getElementById('rock8'), document.getElementById('rock9')]
const paperWinSquares = [document.getElementById('paper1'), document.getElementById('paper2'), document.getElementById('paper3'), document.getElementById('paper4'), document.getElementById('paper5'), document.getElementById('paper6'), document.getElementById('paper7'), document.getElementById('paper8'), document.getElementById('paper9'), ]
const scissorsWinSquares1 = [document.getElementById('scissors1-1'), document.getElementById('scissors1-2'), document.getElementById('scissors1-3'), document.getElementById('scissors1-4'), document.getElementById('scissors1-5'), document.getElementById('scissors1-6'), document.getElementById('scissors1-7'), document.getElementById('scissors1-8'), document.getElementById('scissors1-9'), ]
const scissorsWinSquares2 = [document.getElementById('scissors2-1'), document.getElementById('scissors2-2'), document.getElementById('scissors2-3'), document.getElementById('scissors2-4'), document.getElementById('scissors2-5'), document.getElementById('scissors2-6'), document.getElementById('scissors2-7'), document.getElementById('scissors2-8'), document.getElementById('scissors2-9'), ]

function updateWinSquares(i) {
    if (turnNumber%3 === 1) {
        bigSquareValues[i] = 'R'
        rockWinSquares[i].style.visibility = 'visible'
    } else if (turnNumber%3 === 2) {
        bigSquareValues[i] = 'P'
        paperWinSquares[i].style.visibility = 'visible'
    } else {
        bigSquareValues[i] = 'S'
        scissorsWinSquares1[i].style.visibility = 'visible'
        scissorsWinSquares2[i].style.visibility = 'visible'
    }
}

const activeCovers = [document.getElementById('activeCover1'), document.getElementById('activeCover2'), document.getElementById('activeCover3'), document.getElementById('activeCover4'), document.getElementById('activeCover5'), document.getElementById('activeCover6'), document.getElementById('activeCover7'), document.getElementById('activeCover8'), document.getElementById('activeCover9'), ]
function setSquareToActive(i) {
    if (fullSquares[i] && !checkForWin()) {
        for (let I = 0; I < 9; I++) {
            if (!fullSquares[I]) {
                bigSquares[I].classList.replace('notActive', 'active')
                activeCovers[I].style.visibility = 'visible'
            } else {
                bigSquares[I].classList.replace('active', 'notActive')
                activeCovers[I].style.visibility = 'hidden'
            }
        }
    } else if (!checkForWin()) {
        for (let I = 0; I < 9; I++) {
            if (I === i) {
                bigSquares[I].classList.replace('notActive', 'active')
                activeCovers[I].style.visibility = 'visible'
            } else {               
                bigSquares[I].classList.replace('active', 'notActive')
                activeCovers[I].style.visibility = 'hidden'
            }
        }
    } else {
        for (let I = 0; I < 9; I++) {           
            bigSquares[I].classList.replace('active', 'notActive')
            activeCovers[I].style.visibility = 'hidden'
        }
    }
}
document.getElementById('pictureSwapU').onclick = () => {
    if (pictureType === 'Normal') {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (squares[i][j].getAttribute('src') === '/Rock.jpeg') {
            squares[i][j].setAttribute('src', '/RealisticRock.jpeg')
            } else if (squares[i][j].getAttribute('src') === '/Paper.svg') {
            squares[i][j].setAttribute('src', '/RealisticPaper.jpeg')
            } else if (squares[i][j].getAttribute('src') === '/Scissors.svg') {
            squares[i][j].setAttribute('src', '/RealisticScissors.jpeg')
            }
        }
      }
      pictureType = 'Realistic'
    } else {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (squares[i][j].getAttribute('src') === '/RealisticRock.jpeg') {
            squares[i][j].setAttribute('src', '/Rock.jpeg')
            } else if (squares[i][j].getAttribute('src') === '/RealisticPaper.jpeg') {
            squares[i][j].setAttribute('src', '/Paper.svg')
            } else if (squares[i][j].getAttribute('src') === '/RealisticScissors.jpeg') {
            squares[i][j].setAttribute('src', '/Scissors.svg')
            }
        }
      }
      pictureType = 'Normal'
    }
  }