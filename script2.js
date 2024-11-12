

function createName(){
    localStorage.setItem('name', document.getElementById('nameInput').value);
    //alert(localStorage.getItem('name'))
    window.location.href = 'website.html';
}