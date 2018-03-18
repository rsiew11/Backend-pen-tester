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
    console.log("jldkfkd");

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
///////////////////////----------------------------------///////////////////////
///////////////////////----------------------------------///////////////////////
///////////////////////----------------------------------///////////////////////


//generates a single random charcter
function randomChar(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz=+-_)(*&^%$#@!~<,>.?:;[]{}";
    var r = Math.floor(Math.random() * chars.length);
    return chars.substring(r,r+1);
}

//------------------------------------------------------------------------------
//--------------------The Various Tests Functions-------------------------------
//------------------------------------------------------------------------------
function startSQL(){

}

//------------------------------------------------------------------------------
function startCSRF(){

}

//------------------------------------------------------------------------------
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

//---------------------------End of Test Functions------------------------------
//------------------------------------------------------------------------------


function startTest(){
    //check which radio button is selected
    if(document.getElementById('selectSQL').checked){
        startSQL();
    }
    else if(document.getElementById('selectCSRF').checked){
        startCSRF();
    }
    else if(document.getElementById('selectFuzzing').checked){
        startFuzzing();
    }

}



document.getElementById('setColor').addEventListener('click',changeBackgroundColor);
document.getElementById('startFuzzing').addEventListener('click',startTest);

document.getElementById('new_tab').addEventListener('click',newTab);
document.getElementById('new_window').addEventListener('click',newWindow);

document.getElementById('up_arrow').addEventListener('click',upArrow);
document.getElementById('down_arrow').addEventListener('click',downArrow);


