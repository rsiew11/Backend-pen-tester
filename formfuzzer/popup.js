function newTab(){
    chrome.tabs.create({'url': "https://google.com"});
}

function newWindow(){
    chrome.windows.create({'url': "https://google.com"});
}

function upArrow(){
    var n = localStorage.getItem('counter');
    n++;
    localStorage.setItem('counter', n);
    document.getElementById('counter').innerHTML = n;

}

function downArrow(){
    var n = localStorage.getItem('counter', n);
    n--;
    localStorage.setItem('counter',n);
    document.getElementById('counter').innerHTML = n;
}

function changeBackgroundColor() {
    var hex = document.getElementById('hexVal').value;
    if (hex.length > 6) {
        return;
    }
    var script = 'document.body.style.backgroundColor="#' + hex + '";';
    chrome.tabs.executeScript(null,
    {code: script});
}

function startFuzzing(){
    var iterCount = document.getElementById('startFuzzing').value;

    //checking value of itercount
    if((typeof(iterCount) != "number") || (iterCount <= 0)){
        alert("enter a valid value for the number of iterations")
        return;
    }

    for (var i = 0; i < iterCount; i++) {
        // open iterCount number of tabs... each with different payload
        // payload inserted in all of the forms
        // and then all submitted
    }




}



document.getElementById('setColor').addEventListener('click',changeBackgroundColor);
document.getElementById('startFuzzing').addEventListener('click',startFuzzing);

document.getElementById('new_tab').addEventListener('click',newTab);
document.getElementById('new_window').addEventListener('click',newWindow);

document.getElementById('up_arrow').addEventListener('click',upArrow);
document.getElementById('down_arrow').addEventListener('click',downArrow);


