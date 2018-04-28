//------------------------------------------------------------------------------
//-----------------------Helper Functions For The Tests-------------------------
//------------------------------------------------------------------------------


function displayCSRF(){
    var background = chrome.extension.getBackgroundPage();
    console.log("token info?");
    console.log(background.token_info);

    if (typeof background.token_info.csrf_token !== "undefined") {
        var csrf = document.createElement("div");
        csrf.innerHTML = "CSRF token found:" + background.token_info.csrf_token;
        document.body.appendChild(csrf);
    }
}


//---------------------------End of Test Functions------------------------------
//------------------------------------------------------------------------------

// runs the test based on radio buttons
function startTest(){

    var background = chrome.extension.getBackgroundPage();
    //check which radio button is selected
    if(document.getElementById('selectSQL').checked){
        background.startSQL();
    }
    else if(document.getElementById('selectFuzzing').checked){

        var len = Number(document.getElementById('injectLen').value);
        //checking value of setLen
        if((len >= 1000) || (len <= 0)){
            //TODO: the alert closes instantly
            alert("enter a valid value for the string Length");
        }
        var iterations = Number(document.getElementById('iterCount').value);
        //checking value of iterCount
        if((iterations >= 1000) || (iterations <= 0)){
            //TODO: the alert closes instantly
            alert("enter a valid value for the number of iterations");
        }
                         //nums,   up,  low,  spe, vspe, nvspe
        var characters = [false,false,false,false,false,false];
        characters[0] = document.getElementById('numbers').checked;
        characters[1] = document.getElementById('upperChar').checked;
        characters[2] = document.getElementById('lowerChar').checked;
        characters[3] = document.getElementById('special').checked;
        characters[4] = document.getElementById('verySpecial').checked;
        characters[5] = document.getElementById('numberVerySpecial').checked;

        background.startFuzzing(len,iterations, characters);

    }

}


displayCSRF();
document.getElementById('startTest').addEventListener('click',startTest);







