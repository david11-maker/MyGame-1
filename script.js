let name = localStorage.getItem('name') || ''

let clickCountNow = Number(localStorage.getItem('clickCount') || 0);
let playerHave100 = false
if(clickCountNow>=100) {playerHave100 = true; activate100()}

document.getElementById('counterP').innerHTML = clickCountNow

function goUp(numberOfChange) {
    clickCountNow+=numberOfChange;
    localStorage.setItem('clickCount', clickCountNow.toString());
    document.getElementById('counterP').innerHTML = clickCountNow
    if(clickCountNow>=100) {playerHave100 = true; activate100()}
}

function goDown(numberOfChange) {
    clickCountNow-=numberOfChange;
    localStorage.setItem('clickCount', clickCountNow.toString());
    document.getElementById('counterP').innerHTML = clickCountNow
    if(clickCountNow<100) {playerHave100 = false; deactivate100()}
}

function activate100(){
    document.getElementById('reached100P').innerHTML = 'You reached 100'
}

function deactivate100(){
    document.getElementById('reached100P').innerHTML = ''
}

function openingFunction() {
    if(name==''){
        window.location.href = 'firstlogin.html';
    }
    console.log("Page has been loaded successfully!");
    name = localStorage.getItem('name')
    document.getElementById('welcomeP').innerHTML = `Hello ${name}!`
}



document.addEventListener('DOMContentLoaded', openingFunction);
