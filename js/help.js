function relationLists(list1,list2){
	$(list1).click(
		function(){
			text = $(this).val();
			$(list2).val(text);
		}
	);
	$(list2).click(
		function(){
			text = $(this).val();
			$(list1).val(text);
		}
	);
}

function evalueString (myString) {
	var flag = false;
	var array = new Array();
	var sites = new Array();
	var newString = '';
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] == '"') {
			flag = change(flag);
		};
		if (flag) {
			var character = '';			
			if (myString[i] == ' ') {
				sites.push(i);
			};
		};		
	};
	for (var i = 0; i < myString.length; i++) {
		if (evalueCharacter(i,sites)) {
			newString += '♥';
		}else{
			newString += myString[i];
		};
	};
	return newString;
}

function evalueCharacter (number,array) {
	var flag = false;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == number) {
			flag = true;
		};
	};
	return flag;
}

function change (flag) {
	if (flag) {
		return false;
	}
	else{
		return true;
	};
}

function normalForm (array) {
	var newArray = new Array();
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i].split('♥').join(' '))
	};
	return newArray;
}

function getArrayFromText (string) {
	var ExReg = new RegExp(/\s/);
    var array = normalForm(evalueString(string).split(ExReg));
    var validateArray = new Array;
	for (var i = 0; i < array.length; i++) {
		if (array[i] != '') {
			validateArray.push(array[i]);
		};
	};
	return validateArray;
}

function setListFromArray (array) {
	var listLength = array.length
	lexema = $("#lexema");
	lexema.attr("size", listLength+1);
	var options="<option value='0'>Lexema</option>";
	for (var i = 1; i <= listLength; i++) {
		options = options + getOption(array[i-1],i);
	};
	lexema.html(options);
}
function setListFromArrayName (array) {
	var listLength = array.length
	nombre = $("#nombre");
	nombre.attr("size", listLength+1);
	var options="<option value='0'>Nombre</option>";
	for (var i = 1; i <= listLength; i++) {
		options= options+ getOption(array[i-1],i);
	};
	nombre.html(options);
	/*comment */
}

function getOption (element, id) {
	return "<option value='"+id+"'>"+element+"</option>"
}
