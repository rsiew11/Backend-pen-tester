
var fuzz_hidden_fields;
var max_text_length;
var fuzz_template;
var mark_fuzzed_field;
var fuzz_mark_color;
var select_item_to_mark;
var check_checkbox_fields;
var fuzz_password_fields;
var use_max_length;
var template_random;
var template_option;

var ta_fuzz_yn;
var ta_fuzz_v;

var p_to_t;
var h_to_t;

var sel_radio_fields;

chrome.extension.sendRequest({payloadid:"getsettings"}, function(response) {
	fuzz_hidden_fields = response.fuzz_hidden_fields;
	max_text_length = response.max_text_length;
	fuzz_template = response.fuzz_template;
	mark_fuzzed_field = response.mark_fuzzed_field;
	fuzz_mark_color = response.fuzz_mark_color;
	select_item_to_mark = response.select_item_to_mark;
	check_checkbox_fields = response.check_checkbox_fields;
	fuzz_password_fields = response.fuzz_password_fields;
	use_max_length = response.use_max_length;
	
	template_random = response.template_random;
	template_option = response.template_option;
	sel_radio_fields = response.select_radio_fields;
	ta_fuzz_yn = response.fuzz_textarea_fields;
	ta_fuzz_v = response.textarea_fuzz;
	
	p_to_t = response.pass_to_text;
	h_to_t = response.hide_to_text;
	
	var input_item_data_fields = response.input_item_data_fields;
	


		if(input_item_data_fields && input_item_data_fields.length > 0) {

			input_item_data_fields = input_item_data_fields.split(",");	
		}
		
		//alert(input_item_data_fields);
		
	runFuzz(input_item_data_fields);
	//runFuzz();
});


function runFuzz(data_fields) {
//alert('sdfsfsdf');
	for(var i = 0; i < document.forms.length; i++) {

		var form = document.forms[i];
	
		var inputs = document.forms[i].elements;
		
		for(var j = 0; j < inputs.length; j++) {
	//alert(inputs[j].tagName);
	
			if(inputs[j].tagName.toLowerCase() == 'textarea') {
			
			if(ta_fuzz_yn == 'y') {
				inputs[j].value = ta_fuzz_v;
				if(mark_fuzzed_field == 'y') {
					inputs[j].style.backgroundColor = fuzz_mark_color;
				}				
			}
			
			
			
			} else if(inputs[j].tagName.toLowerCase() == 'input' && inputs[j].type == 'text') {
			
				if(use_max_length && use_max_length == 'y' && inputs[j].maxLength && inputs[j].maxLength < max_text_length) {
				
					fuzzText(inputs[j], fuzz_template, template_random, template_option, inputs[j].maxLength, data_fields);
				} else {
					fuzzText(inputs[j], fuzz_template, template_random, template_option, max_text_length, data_fields);
				}
			
				if(mark_fuzzed_field == 'y') {
					inputs[j].style.backgroundColor = fuzz_mark_color;
				}
			
			} else if(inputs[j].tagName.toLowerCase() == 'input' && inputs[j].type == 'hidden' && (fuzz_hidden_fields && fuzz_hidden_fields == 'y')) {
				fuzzText(inputs[j], fuzz_template, template_random, template_option, max_text_length, data_fields);
			
			
		if(h_to_t == 'y') {	
			inputs[j].type = 'text';	
			
				if(mark_fuzzed_field == 'y') {
					inputs[j].style.backgroundColor = fuzz_mark_color;
				}			
		}	
		
			} else if(inputs[j].type == 'select-one' || inputs[j].type == 'select-multiple') {
		
				if(inputs[j].length > 0) {
					if(inputs[j].length > select_item_to_mark) {
						inputs[j].selectedIndex = select_item_to_mark;
					} else {
						inputs[j].selectedIndex = inputs[j].length-1;
					}
				}
				if(mark_fuzzed_field == 'y') {
					inputs[j].style.backgroundColor = fuzz_mark_color;
				}
			} else if(inputs[j].tagName.toLowerCase() == 'input' && inputs[j].type == 'password' && (fuzz_password_fields && fuzz_password_fields == 'y')) {
				fuzzText(inputs[j], fuzz_template, template_random, template_option, max_text_length, data_fields);
				if(mark_fuzzed_field == 'y') {
					inputs[j].style.backgroundColor = fuzz_mark_color;
				}
		if(p_to_t == 'y') {	
			inputs[j].type = 'text';			
		}	
							
			} else if(inputs[j].tagName.toLowerCase() == 'input' && inputs[j].type == 'checkbox' && (check_checkbox_fields && check_checkbox_fields == 'y')) {
				inputs[j].checked = true;
	
			} else if(inputs[j].tagName.toLowerCase() == 'input' && inputs[j].type == 'radio' && (sel_radio_fields && sel_radio_fields == 'y')) {
				inputs[j].checked = true;
			
			}
				
		}
	}
}


function fuzzText(field, fuzz, rand, type, length, fields) {

//alert(field+fuzz+length);

	var override = false;
	if(fields && fields.length > 0) {
		overriding: for(var i = 0; i < fields.length; i++) {
			if(fields[i] == field.name) {
				override = true;
				
				chrome.extension.sendRequest({input_field_value:field.name,payloadid:"override"}, function(response) {
				
					field.value = response.input_field_value;
				});
				break overriding;
			}
		}
	}
	if(!override) {
		if(type == 'random') {
			var rval = '';
			
			for(var i = 0; i < length; i++) {
			rval += getRandomTempVal(rand)
			}
			
			field.value = rval; 
		} else { //'template'
			while(fuzz.length < length) {
				fuzz+=fuzz;
			}
	
			field.value = fuzz.substring(0, length); 
		}
	}
}

      function getRandomTempVal(fromVals) {
      	var r = Math.floor(Math.random() * fromVals.length);

      	return fromVals.substring(r,r+1);
      }