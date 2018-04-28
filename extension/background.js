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
