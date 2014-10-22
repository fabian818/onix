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
	nombre = $("#nombre");
	nombre.attr("size", listLength+1);
	var optionsLexema="<option value='0'>Lexema</option>";
	var optionsNombre="<option value='0'>Nombre</option>";
	for (var i = 1; i <= listLength; i++) {
		optionsLexema = optionsLexema + getOption(array[i-1],i);
		optionsNombre = optionsNombre + getOption(evalueElementArray(array[i-1]),i);
	};
	lexema.html(optionsLexema);
	nombre.html(optionsNombre);
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


/*comment */
function getOption (element, id) {
	return "<option value='"+id+"'>"+element+"</option>"
}


//Funciones para determinar el tipo de caracter



function isDigit(caracter){
	var patron = ['0','1','2','3','4','5','6','7','8','9'];
	var flag = true;
	for (var i = 0; i < patron.length; i++) {
		if (caracter == patron[i]) {
			flag = true;
		};		
	};
	return flag;
}

function isLetter(caracter){
	var patron = [' ','a','b','c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var flag = false;
	for (var i = 0; i < patron.length; i++) {
		if (patron[i] == caracter) {
			flag = true;
		};		
	};
	return flag;
}

function isComilla (character) {
	if (character == "'") {
		return true;
	}else{
		return false;
	};
}

function evalueElementArray(cadena){	
	var status = 0;
	for (var i = 0; i <= cadena.length; i = i+1) {
		if (cadena[i] != '') {
			status = iterate(cadena[i], status);
		};
	};
	switch(status){
		case 0:
		break;
		case 1:
			return 'Error de cadena';
		break;
		case 2:
			return 'Frase';
		break;
		case 3:
			if (getReservedWord(cadena)) {
				return 'Palabra reservada';
			}else{
				return 'Identificador';
			}
		break;
		case 4:
			return getElement(cadena);
		break;
		case 5:
			return 'Número';
		break;
		case 6:
			return 'Cadena';
		break;
		default:
			return 'Componente';
		break;
	}
}


function iterate (c,status) {
	switch(status){
		case 0:
			if (c == '"') {
				return 1;
			}else{
				if (isLetter(c)) {
					return 3;
				}else{
					if (getElement(c)) {
						return 4;
					}else{
						if (isDigit(c)) {
							return 5
						}else{
							return 6;
						};
					};
				};
			};
		break;
		case 1:
			if (isLetter(c)) {
				return 1;
			}else{
				if (c == '"') {
					return 2;
				}else{
					return 6;
				};
			};
		break;
		case 2:
			return 6;
		break;
		case 3:
			if (isLetter(c) || isDigit(c)) {
				return 3;
			}else{
				return 6;
			};
		break;
		case 4:
			return 7;
		break;
		case 5:
			if (isDigit(c)) {
				return 5;
			}else{
				return 6;
			};
		break;
		default:
			return 7;
		break;
	}
}
