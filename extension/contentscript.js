function alertToken(tokenValue) {

    alert("CSRF Token: ".concat(tokenValue));
}

function findToken(){

    var names = ["csrfmiddlewaretoken","token","csrf","csrftoken","csrf_token"];

    for (var i = 0; i < names.length; i++) {
        var tokenID = document.getElementById(names[i]);
        var tokenName = document.getElementsByName(names[i]);
        if (tokenID) {
            return tokenID.value;
        }
        else if(tokenName){
            for (var j = 0; j < tokenName.length; j++) {
                if (tokenName[j]) {
                    return tokenName[j].value;
                }
            }
        }
    }
}

// send csrf tokens found from the content script to the extension
function send_popup() {
    var token = findToken();
    console.log(token);
    chrome.runtime.sendMessage({ csrf_token:token,
                                 function(response) {
                                     console.log(response.received);
                                 }
                              });
}

send_popup();


