
var default_fuzz_hidden_fields = 'n';
var default_max_text_length = 100;
var default_fuzz_template = 'wG54$5a@*ig5$4E<r=7gur+&y?t^d72>3uH76#d4FG-2';
var default_mark_fuzzed_field = 'y';
var default_fuzz_mark_color = '#cfffdd';
var default_select_item_to_mark = 1;
var default_check_checkbox_fields ='y';
var default_fuzz_password_fields = 'n';
var default_use_max_length = 'y';
var default_template_option = 'template';
var default_template_random = '';

var default_fuzz_textarea_fields = 'n';
var default_textarea_fuzz = 'textarea fuzzed!';

var default_pass_to_text = 'n';
var default_hide_to_text = 'n';

var default_select_radio_fields = 'n';

function getSettings() {
      return {
        fuzz_hidden_fields: !localStorage.fuzz_hidden_fields ? default_fuzz_hidden_fields: localStorage.fuzz_hidden_fields,
        max_text_length: !localStorage.max_text_length ? default_max_text_length: localStorage.max_text_length,
        mark_fuzzed_field: !localStorage.mark_fuzzed_field ? default_mark_fuzzed_field: localStorage.mark_fuzzed_field,
        fuzz_mark_color: !localStorage.fuzz_mark_color ? default_fuzz_mark_color: localStorage.fuzz_mark_color,
        fuzz_template: !localStorage.fuzz_template ? default_fuzz_template: localStorage.fuzz_template,
        select_item_to_mark: !localStorage.select_item_to_mark ? default_select_item_to_mark: localStorage.select_item_to_mark,
        check_checkbox_fields: !localStorage.check_checkbox_fields ? default_check_checkbox_fields: localStorage.check_checkbox_fields,
        use_max_length: !localStorage.use_max_length ? default_use_max_length: localStorage.use_max_length,
        fuzz_password_fields: !localStorage.fuzz_password_fields ? default_fuzz_password_fields: localStorage.fuzz_password_fields,
        input_item_data_fields: localStorage.input_item_data_fields,
        template_option: !localStorage.template_option ? default_template_option : localStorage.template_option,
        template_random: !localStorage.template_random ? default_template_random : localStorage.template_random,
        
        select_radio_fields: !localStorage.select_radio_fields ? default_select_radio_fields : localStorage.select_radio_fields,
        
        pass_to_text: !localStorage.pass_to_text ? default_pass_to_text : localStorage.pass_to_text,
        hide_to_text: !localStorage.hide_to_text ? default_hide_to_text : localStorage.hide_to_text,
        
        fuzz_textarea_fields: !localStorage.fuzz_textarea_fields ? default_fuzz_textarea_fields : localStorage.fuzz_textarea_fields,
        textarea_fuzz: !localStorage.textarea_fuzz ? default_textarea_fuzz : localStorage.textarea_fuzz,
        
        rand_value_1: !localStorage.rand_value_1 ? 'n' : localStorage.rand_value_1,
        rand_value_2: !localStorage.rand_value_2 ? 'n' : localStorage.rand_value_2,
        rand_value_3: !localStorage.rand_value_3 ? 'n' : localStorage.rand_value_3,
        rand_value_4: !localStorage.rand_value_4 ? 'n' : localStorage.rand_value_4,
        rand_value_5: !localStorage.rand_value_5 ? 'n' : localStorage.rand_value_5,
        rand_value_6: !localStorage.rand_value_6 ? 'n' : localStorage.rand_value_6,
        rand_value_7: !localStorage.rand_value_7 ? 'n' : localStorage.rand_value_7,
        rand_value_8: !localStorage.rand_value_8 ? 'n' : localStorage.rand_value_8,
        rand_value_9: !localStorage.rand_value_9 ? 'n' : localStorage.rand_value_9,
        rand_value_10: !localStorage.rand_value_10 ? 'n' : localStorage.rand_value_10,
        rand_value_11: !localStorage.rand_value_11 ? 'n' : localStorage.rand_value_11,
        rand_value_12: !localStorage.rand_value_12 ? 'n' : localStorage.rand_value_12,
        rand_value_13: !localStorage.rand_value_13 ? 'n' : localStorage.rand_value_13,
        rand_value_14: !localStorage.rand_value_14 ? 'n' : localStorage.rand_value_14,
        rand_value_15: !localStorage.rand_value_15 ? 'n' : localStorage.rand_value_15,
        rand_value_16: !localStorage.rand_value_16 ? 'n' : localStorage.rand_value_16,
        rand_value_17: !localStorage.rand_value_17 ? 'n' : localStorage.rand_value_17,
        rand_value_18: !localStorage.rand_value_18 ? 'n' : localStorage.rand_value_18,
        rand_value_19: !localStorage.rand_value_19 ? 'n' : localStorage.rand_value_19,
        rand_value_20: !localStorage.rand_value_20 ? 'n' : localStorage.rand_value_20,
        rand_value_21: !localStorage.rand_value_21 ? 'n' : localStorage.rand_value_21
        
      };
}

function setSelRadFields(yn) {
	if(yn && yn == 'y') {
		localStorage["select_radio_fields"] = 'y';
	} else {
		localStorage["select_radio_fields"] = 'n';
	}
}

function setHideToText(yn) {
	if(yn && yn == 'y') {
		localStorage["hide_to_text"] = 'y';
	} else {
		localStorage["hide_to_text"] = 'n';
	}
}

function setPassToText(yn) {
	if(yn && yn == 'y') {
		localStorage["pass_to_text"] = 'y';
	} else {
		localStorage["pass_to_text"] = 'n';
	}
}

function setFuzzTA(yn) {
	if(yn && yn == 'y') {
		localStorage["fuzz_textarea_fields"] = 'y';
	} else {
		localStorage["fuzz_textarea_fields"] = 'n';
	}
}

function setTAVal(v) {
	if(v) {
		localStorage["textarea_fuzz"] = v;
	} else {
		localStorage["textarea_fuzz"] = default_textarea_fuzz;
	}
	
	return localStorage["textarea_fuzz"];
}

function setFuzzPass(yn) {
	if(yn && yn == 'y') {
		localStorage["fuzz_password_fields"] = 'y';
	} else {
		localStorage["fuzz_password_fields"] = 'n';
	}
}

function setUseMax(yn) {
	if(yn && yn == 'y') {
		localStorage["use_max_length"] = 'y';
	} else {
		localStorage["use_max_length"] = 'n';
	}
}


function setSelectedItem(i) {
	if(!i || i < 0) {
		i = default_select_item_to_mark;
	}
	localStorage["select_item_to_mark"] = i;
	return i;
}

function setCheckCheckbox(yn) {
	if(yn && yn == 'y') {
		localStorage["check_checkbox_fields"] = 'y';
	} else {
		localStorage["check_checkbox_fields"] = 'n';
	}
}

function setMark(yn) {
	if(yn && yn == 'y') {
		localStorage["mark_fuzzed_field"] = 'y';
	} else {
		localStorage["mark_fuzzed_field"] = 'n';
	}
}

function setMarkColor(color) {
	var currentMarkColorTemp = localStorage.fuzz_mark_color;
	if(!color || color.length == 0 || color.length > 7) { // todo - weak validation, get something better
		if(!currentMarkColorTemp) {
			color = default_fuzz_mark_color;
		} else {
			color = currentMarkColorTemp;
		}
	}
	localStorage.fuzz_mark_color = color;
	return color;
}

function setTemplate(fuzz) {
	var currentFuzzTemp = localStorage.fuzz_template;
	if(!fuzz || fuzz.length == 0 || fuzz.length > 256) {
		if(!currentFuzzTemp) {
			fuzz = default_fuzz_template;
		} else {
			fuzz = currentFuzzTemp;
		}
	}
	localStorage.fuzz_template = fuzz;
	return fuzz;
}

function setMaxLength(length) {
	var currentLengthTemp = localStorage.max_text_length;
	if(!length || isNaN(length) || length.length > 3) {
		if(!currentLengthTemp) {
			length = default_max_text_length;
		} else {
			length = currentLengthTemp;
		}
	}
	localStorage.max_text_length = length;
	return length;
}

function setHidden(yn) {
	if(yn && yn == 'y') {
		localStorage["fuzz_hidden_fields"] = 'y';
	} else {
		localStorage["fuzz_hidden_fields"] = 'n';
	}
}

function setTempOpt(tempOpt, randVals) {
	localStorage.template_option = tempOpt;
	localStorage.template_random = randVals;
}

function setRand(rand, val) {
	localStorage["rand_value_"+rand] = val;
}