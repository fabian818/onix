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
	var ExReg = new RegExp(/\s/);
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


//Funciones para determinar el tipo de caracter

function isLetter(caracter){
	var patron = /^[a-z-A-Z]+$/;

	if (caracter.match(patron)) {
		return true;
	}else{
		return false;
	};

}

function isNumber(caracter){
	var patron =/^[0-9]+$/;

	if (caracter.match(patron)) {
		return true;
	}else{
		return false;
	};
}

function isWhite(caracter){

	if (caracter==' '){
		return true;
	}else{
		return false;
	};
}

function SimboloIdentificador(caracter){

	var simbolos = ['_','$','ç','Ç','"',' '];
	var result = true;
	for (var i = 0; i<simbolos.length;i++) {
		if (simbolos[i]==caracter){
			result = true;
			i = simbolos.length;
		}else{
			result = false;
		}
	};	
	return result;
}
function SimboloNoIdentificador(caracter){

	var simbolos = ['_','$','ç','Ç'];
	var result = true;
	for (var i = 0; i<simbolos.length;i++) {
		if (simbolos[i]==caracter){
			result = true;
			i = simbolos.length;
		}else{
			result = false;
		}
	};	
	return result;
}

function isComilla(caracter){
	if (caracter=='\"') {
		return true;
	}else{
		return false;
	}
}

function Automata(cadena){
	var tabla = new Array();

	var fila = 0, columna, estado=0;

	tabla[0][0]=1; tabla[0][1]=3;tabla[0][2]=5;tabla[0][3]=6;tabla[0][4]=4;tabla[0][5]=0;
	tabla[0][0]=2; tabla[0][1]=1;tabla[0][2]=1;tabla[0][3]=1;tabla[0][4]=1;tabla[0][5]=1;
	tabla[0][0]=7; tabla[0][1]=7;tabla[0][2]=7;tabla[0][3]=7;tabla[0][4]=7;tabla[0][5]=2;
	tabla[0][0]=7; tabla[0][1]=3;tabla[0][2]=3;tabla[0][3]=7;tabla[0][4]=3;tabla[0][5]=7;
	tabla[0][0]=7; tabla[0][1]=7;tabla[0][2]=7;tabla[0][3]=7;tabla[0][4]=7;tabla[0][5]=4;
	tabla[0][0]=7; tabla[0][1]=7;tabla[0][2]=5;tabla[0][3]=7;tabla[0][4]=7;tabla[0][5]=7;
	tabla[0][0]=7; tabla[0][1]=7;tabla[0][2]=7;tabla[0][3]=7;tabla[0][4]=7;tabla[0][5]=6;

	for(var i=0; i<cadena.length;i++){

	}

}
