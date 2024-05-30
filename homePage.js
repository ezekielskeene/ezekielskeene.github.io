let normal = false
let ultimate = false

document.getElementById('normal').onclick = () => {
    normal = true
    ultimate = false
    document.getElementById('normal').classList.replace('notClicked', 'clicked');
    document.getElementById('ultimate').classList.replace('clicked', 'notClicked');
}
document.getElementById('ultimate').onclick = () => {
    normal = false
    ultimate = true
    document.getElementById('ultimate').classList.replace('notClicked', 'clicked');
    document.getElementById('normal').classList.replace('clicked', 'notClicked');
}

document.getElementById('play').onclick = () => {
    if (normal) {
        window.location.href = 'Rock-Tic.html';
        document.getElementById('selectError').style.visibility = 'hidden'
    } else if (ultimate) {
        window.location.href = 'Ultimate-Rock-Tic.html';
        document.getElementById('selectError').style.visibility = 'hidden'
    } else {
        document.getElementById('selectError').style.visibility = 'visible'
    }
}