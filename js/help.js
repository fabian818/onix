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

function changeSpace (string) {
	var hash = getHash(string);
	alert(hash);
}

function getHash(string){
	var elements = new Array();
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '"') {
			elements.push(i);
		};
	};
	var hash = new Array();
	for (var i = 0; i < elements.length; i++) {
		if ((i+2)%2 === 0) {
			hash["_"] = "p";
		}
		else{
			hash["__"] = "i";
		};
	};
	return hash;
}

function getArrayFromText (string) {
	var ExReg=new RegExp(/\s/);
    var array = string.split(ExReg);
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
