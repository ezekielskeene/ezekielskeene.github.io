const columns = [document.getElementById('column1'), document.getElementById('column2'), document.getElementById('column3'), document.getElementById('column4'), document.getElementById('column5'), document.getElementById('column6'), document.getElementById('column7')]
const column1 = [document.getElementById('space1-1'), document.getElementById('space1-2'), document.getElementById('space1-3'), document.getElementById('space1-4'), document.getElementById('space1-5'), document.getElementById('space1-6')]
const column2 = [document.getElementById('space2-1'), document.getElementById('space2-2'), document.getElementById('space2-3'), document.getElementById('space2-4'), document.getElementById('space2-5'), document.getElementById('space2-6')]
const column3 = [document.getElementById('space3-1'), document.getElementById('space3-2'), document.getElementById('space3-3'), document.getElementById('space3-4'), document.getElementById('space3-5'), document.getElementById('space3-6')]
const column4 = [document.getElementById('space4-1'), document.getElementById('space4-2'), document.getElementById('space4-3'), document.getElementById('space4-4'), document.getElementById('space4-5'), document.getElementById('space4-6')]
const column5 = [document.getElementById('space5-1'), document.getElementById('space5-2'), document.getElementById('space5-3'), document.getElementById('space5-4'), document.getElementById('space5-5'), document.getElementById('space5-6')]
const column6 = [document.getElementById('space6-1'), document.getElementById('space6-2'), document.getElementById('space6-3'), document.getElementById('space6-4'), document.getElementById('space6-5'), document.getElementById('space6-6')]
const column7 = [document.getElementById('space7-1'), document.getElementById('space7-2'), document.getElementById('space7-3'), document.getElementById('space7-4'), document.getElementById('space7-5'), document.getElementById('space7-6')]
const spaces = [column1, column2, column3, column4, column5, column6, column7]
let spaceColors = [['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E', 'E']]
let currentColor = ['R', 'red']

for (let i = 0; i < 7; i++) {
    columns[i].addEventListener('click', () => {
        if (!checkForWin()) {
            click(i)
        }
    })
    for (let j = 0; j < 6; j++) {
        spaces[i][j].addEventListener('mouseover', () => {
            if (spaceColors[i][j] === 'E') {
                spaces[i][j].style.backgroundColor = '#23b24d'
            }
        })
        spaces[i][j].addEventListener('mouseout', () => {
            if (spaceColors[i][j] === 'E') {
                spaces[i][j].style.backgroundColor = '#20d54d'
            }
        })
    }
}
document.getElementById('reset').addEventListener('click', () => {
    reset()
})


function click(i) {
    for (let j = 5; j >= 0; j--) {       
        if (spaceColors[i][j] === 'E') {
            spaceColors[i][j] = currentColor[0]
            spaces[i][j].style.backgroundColor = currentColor[1]
            document.getElementById('valid').style.visibility = 'hidden'
            if (currentColor[0] === 'R') {
                document.getElementById('turnHeader').textContent = "Yellow's Turn"
                currentColor = ['Y', 'yellow']
            } else {
                document.getElementById('turnHeader').textContent = "Red's Turn"
                currentColor = ['R', 'red']
            }
            break
        } else if (j === 0) {
            document.getElementById('valid').style.visibility = 'visible'
        }
    }
    if (checkForWin()) {
        if (currentColor[0] === 'R') {
            document.getElementById('turnHeader').textContent = "Yellow Wins!"
        } else {
            document.getElementById('turnHeader').textContent = "Red Wins!"
        }
        document.getElementById('reset').textContent = "Play Again?"
    }

}

function checkForWin() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            if (j <= 2) {
                if (spaceColors[i][j] === spaceColors[i][j+1] && spaceColors[i][j+1] === spaceColors[i][j+2] && spaceColors[i][j+2] === spaceColors[i][j+3]  && spaceColors[i][j] !== "E") {
                    return true
                }
            }
            if (i <= 3) {
                if (spaceColors[i][j] === spaceColors[i+1][j] && spaceColors[i+1][j] === spaceColors[i+2][j] && spaceColors[i+2][j] === spaceColors[i+3][j]  && spaceColors[i][j] !== "E") {
                    return true
                }
            }
            if (i <= 3 && j <= 2) {
                if (spaceColors[i][j] === spaceColors[i+1][j+1] && spaceColors[i+1][j+1] === spaceColors[i+2][j+2] && spaceColors[i+2][j+2] === spaceColors[i+3][j+3]  && spaceColors[i][j] !== "E") {
                    return true
                }
            }
            if (i <= 3 && j >= 2) {
                if (spaceColors[i][j] === spaceColors[i+1][j-1] && spaceColors[i+1][j-1] === spaceColors[i+2][j-2] && spaceColors[i+2][j-2] === spaceColors[i+3][j-3]  && spaceColors[i][j] !== "E") {
                    return true
                }
            }
        }
    }
}

function reset() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            spaceColors[i][j] = 'E'
            spaces[i][j].style.backgroundColor = '#20d54d'
        }
    }
    currentColor = ['R', 'red']
    document.getElementById('reset').textContent = "Reset"
    document.getElementById('turnHeader').textContent = "Red's Turn"
    document.getElementById('valid').style.visibility = 'hidden'
}