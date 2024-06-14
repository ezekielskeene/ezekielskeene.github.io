const squaresRow1 = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3'), document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6'), document.getElementById('square7'), document.getElementById('square8'), document.getElementById('square9'), document.getElementById('square10')]
const squaresRow2 = [document.getElementById('square11'), document.getElementById('square12'), document.getElementById('square13'), document.getElementById('square14'), document.getElementById('square15'), document.getElementById('square16'), document.getElementById('square17'), document.getElementById('square18'), document.getElementById('square19'), document.getElementById('square20')]
const squaresRow3 = [document.getElementById('square21'), document.getElementById('square22'), document.getElementById('square23'), document.getElementById('square24'), document.getElementById('square25'), document.getElementById('square26'), document.getElementById('square27'), document.getElementById('square28'), document.getElementById('square29'), document.getElementById('square30')]
const squaresRow4 = [document.getElementById('square31'), document.getElementById('square32'), document.getElementById('square33'), document.getElementById('square34'), document.getElementById('square35'), document.getElementById('square36'), document.getElementById('square37'), document.getElementById('square38'), document.getElementById('square39'), document.getElementById('square40')]
const squaresRow5 = [document.getElementById('square41'), document.getElementById('square42'), document.getElementById('square43'), document.getElementById('square44'), document.getElementById('square45'), document.getElementById('square46'), document.getElementById('square47'), document.getElementById('square48'), document.getElementById('square49'), document.getElementById('square50')]
const squaresRow6 = [document.getElementById('square51'), document.getElementById('square52'), document.getElementById('square53'), document.getElementById('square54'), document.getElementById('square55'), document.getElementById('square56'), document.getElementById('square57'), document.getElementById('square58'), document.getElementById('square59'), document.getElementById('square60')]
const squaresRow7 = [document.getElementById('square61'), document.getElementById('square62'), document.getElementById('square63'), document.getElementById('square64'), document.getElementById('square65'), document.getElementById('square66'), document.getElementById('square67'), document.getElementById('square68'), document.getElementById('square69'), document.getElementById('square70')]
const squaresRow8 = [document.getElementById('square71'), document.getElementById('square72'), document.getElementById('square73'), document.getElementById('square74'), document.getElementById('square75'), document.getElementById('square76'), document.getElementById('square77'), document.getElementById('square78'), document.getElementById('square79'), document.getElementById('square80')]
const squaresRow9 = [document.getElementById('square81'), document.getElementById('square82'), document.getElementById('square83'), document.getElementById('square84'), document.getElementById('square85'), document.getElementById('square86'), document.getElementById('square87'), document.getElementById('square88'), document.getElementById('square89'), document.getElementById('square90')]
const squaresRow10 = [document.getElementById('square91'), document.getElementById('square92'), document.getElementById('square93'), document.getElementById('square94'), document.getElementById('square95'), document.getElementById('square96'), document.getElementById('square97'), document.getElementById('square98'), document.getElementById('square99'), document.getElementById('square100')]
const squares = [squaresRow1, squaresRow2, squaresRow3, squaresRow4, squaresRow5, squaresRow6, squaresRow7, squaresRow8, squaresRow9, squaresRow10]
const amountSelectors = [[document.getElementById('1shipup'), document.getElementById('1shipdown'), document.getElementById('1shipAmount')], [document.getElementById('2shipup'), document.getElementById('2shipdown'), document.getElementById('2shipAmount')], [document.getElementById('3shipup'), document.getElementById('3shipdown'), document.getElementById('3shipAmount')], [document.getElementById('4shipup'), document.getElementById('4shipdown'), document.getElementById('4shipAmount')]]

let squareColors1 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors2 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors3 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors4 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors5 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors6 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors7 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors8 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors9 =  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors10 = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
let squareColors = [squareColors1, squareColors2, squareColors3, squareColors4, squareColors5, squareColors6, squareColors7, squareColors8, squareColors9, squareColors10]
let squareProbabilities1 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities2 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities3 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities4 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities5 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities6 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities7 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities8 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities9 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let squareProbabilities = [squareProbabilities1, squareProbabilities2, squareProbabilities3, squareProbabilities4, squareProbabilities5, squareProbabilities6, squareProbabilities7, squareProbabilities8, squareProbabilities9, squareProbabilities10]
let bestProb = 36
let bestSquares = []
let numberOf4Ships = parseInt(amountSelectors[3][2].textContent)
let numberOf3Ships = parseInt(amountSelectors[2][2].textContent)
let numberOf2Ships = parseInt(amountSelectors[1][2].textContent)
let numberOf1Ships = parseInt(amountSelectors[0][2].textContent)
let shipNumbers = [numberOf1Ships, numberOf2Ships, numberOf3Ships, numberOf4Ships]

function updateColors() {
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[i].length; j++) {
            squares[i][j].textContent = '\u2060'
            if (squareColors[i][j] === 'B') {
                squares[i][j].style.backgroundColor = 'rgb(0, 200, 255)'
            } else if (squareColors[i][j] === 'G') {
                squares[i][j].style.backgroundColor = 'gray'
            } else if (squareColors[i][j] === 'R') {
                squares[i][j].style.backgroundColor = 'red'
            }else if (squareColors[i][j] === 'D') {
                squares[i][j].style.backgroundColor = 'black'
            } else {
                squares[i][j].style.backgroundColor = 'green'
            }
            
        }
    }
}


for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
        squares[i][j].addEventListener('click', () => {
            click(squares[i][j], i, j)

        })
    }
}
for (let i = 0; i < 4; i++) {
    amountSelectors[i][0].addEventListener('click', () => {
        if (amountSelectors[i][2].textContent < 10) {
            shipNumbers[i]++
            amountSelectors[i][2].textContent++
            updateMap()
        }
    })
    amountSelectors[i][1].addEventListener('click', () => {
        if (amountSelectors[i][2].textContent > 0) {
            shipNumbers[i]--
            amountSelectors[i][2].textContent--
            updateMap()
        }
    })
}

updateColors()
updateMap()

function click(square, i, j) {
    if (squareColors[i][j] === 'B') {
        squareColors[i][j] = 'G'
        square.style.backgroundColor = 'gray'
    } else if (squareColors[i][j] === 'G') {
        squareColors[i][j] = 'R'
        square.style.backgroundColor = 'red'
    } else if (squareColors[i][j] === 'R') {
        squareColors[i][j] = 'D'
        square.style.backgroundColor = 'black'
    } else {
        squareColors[i][j] = 'B'
        square.style.backgroundColor = 'rgb(0, 200, 255)'
    }
    updateMap()
}

function updateMap() {
    updateProbs()
    bestProb = 0
    bestSquares = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (squareProbabilities[i][j] > bestProb) {
                bestProb = squareProbabilities[i][j]
                bestSquares = []
                bestSquares.push([i, j])
            } else if (squareProbabilities[i][j] === bestProb) {
                bestSquares.push([i, j])
            }
            squares[i][j].style.borderColor = 'transparent'
            squares[i][j].textContent = squareProbabilities[i][j]
        }
    }
    for (let i = 0; i < bestSquares.length; i++) {
        squares[bestSquares[i][0]][bestSquares[i][1]].style.borderColor = 'red'
    }

}

function updateProbs() {
    let redAmount = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            squareProbabilities[i][j] = 0
            if (squares[i][j].style.backgroundColor === 'red') {
                redAmount++
            }
        }
    }
    if (redAmount === 0) {
        let shouldAdd = true;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let s = 1; s < 5; s++) {
                    shouldAdd = true
                    //horizontal
                    if (squareColors[i][j] === 'B') {
                        for (let t = 0; t < s; t++) {
                            if (j-t >= 0) {
                                if (squareColors[i][j-t] === 'B') {

                                } else {
                                    shouldAdd = false
                                }
                            } else {
                                shouldAdd = false
                            }
                        }
                        if (shouldAdd) {
                            for (let t = 0; t < s; t++) {
                                if (s === 4) {
                                    squareProbabilities[i][j-t]+= shipNumbers[3]
                                } else if (s === 3) {
                                    squareProbabilities[i][j-t]+= shipNumbers[2]
                                } else if (s === 2) {
                                    squareProbabilities[i][j-t]+= shipNumbers[1]
                                } else {
                                    squareProbabilities[i][j-t]+= shipNumbers[0]
                                }
                            }
                        }
                    }
                    shouldAdd = true
                    //vertical
                    if (s !== 1) {
                        if (squareColors[i][j] === 'B') {
                            for (let t = 0; t < s; t++) {
                                if (i-t >= 0) {
                                    if (squareColors[i-t][j] === 'B') {

                                    } else {
                                        shouldAdd = false
                                    }
                                } else {
                                    shouldAdd = false
                                }
                            }
                            if (shouldAdd) {
                                for (let t = 0; t < s; t++) {
                                    if (s === 4) {
                                        squareProbabilities[i-t][j]+= shipNumbers[3]
                                    } else if (s === 3) {
                                        squareProbabilities[i-t][j]+= shipNumbers[2]
                                    } else if (s === 2) {
                                        squareProbabilities[i-t][j]+= shipNumbers[1]
                                    } else {
                                        squareProbabilities[i-t][j]+= shipNumbers[0]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (redAmount === 1) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (squareColors[i][j] === 'R') {
                    if (squareColors[i][j+1] === 'B') {
                        squareProbabilities[i][j+1]++
                    }
                    if (squareColors[i][j-1] === 'B') {
                        squareProbabilities[i][j-1]++
                    }
                        if (squareColors[i+1][j] === 'B') {
                    squareProbabilities[i+1][j]++
                    }
                    if (squareColors[i-1][j] === 'B') {
                        squareProbabilities[i-1][j]++
                    }
                }
            }
        }
    } else if (redAmount) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (squareColors[i][j] === 'R') {
                    if (squareColors[i][j+1] === 'R') {
                        if (squareColors[i][j+2] === 'B') {
                            squareProbabilities[i][j+2]++
                        }
                        if (squareColors[i][j-1] === 'B') {
                            squareProbabilities[i][j-1]++
                        }
                    } 
                    if (squareColors[i][j-1] === 'R') {
                        if (squareColors[i][j+1] === 'B') {
                            squareProbabilities[i][j+1]++
                        }
                        if (squareColors[i][j-2] === 'B') {
                            squareProbabilities[i][j-2]++
                        }
                    } 
                    if (squareColors[i+1][j] === 'R') {
                        if (squareColors[i+2][j] === 'B') {
                            squareProbabilities[i+2][j]++
                        }
                        if (squareColors[i-1][j] === 'B') {
                            squareProbabilities[i-1][j]++
                        }
                    } 
                    if (squareColors[i-1][j] === 'R') {
                        if (squareColors[i-2][j] === 'B') {
                            squareProbabilities[i-2][j]++
                        }
                        if (squareColors[i+1][j] === 'B') {
                            squareProbabilities[i+1][j]++
                        }
                    }
                }
            }
        }
    }
}

document.getElementById('reset').onclick = () => {
    reset()
}

function reset() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            squareColors[i][j] = 'B'
        }
    }
    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            shipNumbers[i] = 4
            amountSelectors[i][2].textContent = 4
        } else if (i === 1) {
            shipNumbers[i] = 3
            amountSelectors[i][2].textContent = 3
        } else if (i === 2) {
            shipNumbers[i] = 2
            amountSelectors[i][2].textContent = 2
        } else {
            shipNumbers[i] = 1
            amountSelectors[i][2].textContent = 1
        }

    }
    updateColors()
    updateMap()
}

