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
///////////////////////----------------------------------///////////////////////
///////////////////////----------------------------------///////////////////////
///////////////////////----------------------------------///////////////////////

//------------------------------------------------------------------------------
//-----------------------Helper Functions For The Tests-------------------------
//------------------------------------------------------------------------------


//generates a single random charcter
function randomChar(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz=+-_)(*&^%$#@!~<,>.?:;[]{}";
    var r = Math.floor(Math.random() * chars.length);
    return chars.substring(r,r+1);
}

//------------------------------------------------------------------------------
function createString(len){
    var s = '';
    for (var i=0; i<len; i++){
        s = s.concat(randomChar());
    }
    return s;
}

//------------------------------------------------------------------------------
function fillForm(s){
    //TODO
    //find the submit/search bar and fill it out
    chrome.tabs.executeScript(null,
    {
        code:"document.forms[0]['q'].value=".concat(s)
    });

}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//--------------------The Various Tests Functions-------------------------------
//------------------------------------------------------------------------------
function startSQL(iterCount){
    //TODO: the whole thing

    var sqlDatabase = [
    "",
    "",
    "",
    "",
    ""]


    var site = "http://192.168.1.29/?s="
    var test = site.concat()
    for (var i=0; i<iterCount; i++){
        //shit

    }

}

//------------------------------------------------------------------------------
function startCSRF(){
    //TODO: the whole thing nams stuff here

}

//------------------------------------------------------------------------------
function startFuzzing(fuzLen, iterCount){


    // chrome.tabs.query({
    // active: true,
    // currentWindow: true
    // }, function(tabs) {
    //     var tabURL = tabs[0].url;
    //     console.log(tabURL);
    // });

    var site = "http://192.168.1.29/?s=" // search term will be appended
    var test = site.concat(createString(fuzLen));

    for (let i = 0; i < iterCount; i++) {
        chrome.tabs.create({'url': test}); // right now website is hardcoded...
        test = site.concat(createString(fuzLen));
    }
}


//---------------------------End of Test Functions------------------------------
//------------------------------------------------------------------------------

// runs the test based on radio buttons
function startTest(){
    console.log("lsdjfkldsjdjf");

    var len = Number(document.getElementById('injectLen').value);
    //checking value of setLen
    if((len >= 1000) || (len <= 0)){
        //TODO: the alert closes instantly
        alert("enter a valid value for the string Length")
    }

    var iterations = Number(document.getElementById('iterCount').value);
    //checking value of iterCount
    if((iterations >= 1000) || (iterations <= 0)){
        //TODO: the alert closes instantly
        alert("enter a valid value for the number of iterations")
    }

    //check which radio button is selected
    if(document.getElementById('selectSQL').checked){
        startSQL(iterations);
    }
    else if(document.getElementById('selectCSRF').checked){
        startCSRF();
    }
    else if(document.getElementById('selectFuzzing').checked){
        startFuzzing(len,iterations);
    }

}


// document.getElementById('setColor').addEventListener('click',changeBackgroundColor);
document.getElementById('startTest').addEventListener('click',startTest);

// document.getElementById('new_tab').addEventListener('click',newTab);
// document.getElementById('new_window').addEventListener('click',newWindow);

// document.getElementById('up_arrow').addEventListener('click',upArrow);
// document.getElementById('down_arrow').addEventListener('click',downArrow);


