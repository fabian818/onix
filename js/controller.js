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
/*Selecionar Listas*/
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