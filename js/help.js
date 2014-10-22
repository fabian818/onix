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
function setListFromArrayName (array) {
	var listLength = array.length
	nombre = $("#nombre");
	nombre.attr("size", listLength+1);
	var options="<option value='0'>Nombre</option>";
	for (var i = 1; i <= listLength; i++) {

		options= options+ getOption(getReservedWord(array[i-1]),i);
	};
	nombre.html(options);
	
}
function comprobar(array){

	
}
/*comment */
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

	/*
	var array = new Array();

	array{
		[0,0] : 1,
		[1,0] : 2
	};
	*/
	tabla[0][0]=1; tabla[0][1]=3;tabla[0][2]=5;tabla[0][3]=6;tabla[0][4]=4;tabla[0][5]=0;
	tabla[1][0]=2; tabla[1][1]=1;tabla[1][2]=1;tabla[1][3]=1;tabla[1][4]=1;tabla[1][5]=1;
	tabla[2][0]=7; tabla[2][1]=7;tabla[2][2]=7;tabla[2][3]=7;tabla[2][4]=7;tabla[2][5]=2;
	tabla[3][0]=7; tabla[3][1]=3;tabla[3][2]=3;tabla[3][3]=7;tabla[3][4]=3;tabla[3][5]=7;
	tabla[4][0]=7; tabla[4][1]=7;tabla[4][2]=7;tabla[4][3]=7;tabla[4][4]=7;tabla[4][5]=4;
	tabla[5][0]=7; tabla[5][1]=7;tabla[5][2]=5;tabla[5][3]=7;tabla[5][4]=7;tabla[5][5]=7;
	tabla[6][0]=7; tabla[6][1]=7;tabla[6][2]=7;tabla[6][3]=7;tabla[6][4]=7;tabla[6][5]=6;

	for(var i=0; i<cadena.length;i++){
		if (isComilla(cadena.charAt(i))) {
			columna=0;
		}else if (isLetter(cadena.charAt(i))) {
			columna=1;
		}else if (isNumber(cadena.charAt(i)) {
			columna=2;
		}else if (SimboloIdentificador(cadena.charAt(i))) {
			columna=3;
		}else if (SimboloNoIdentificador(cadena.charAt(i))) {
			columna=4;
		}else{
			columna=5;
		}
		estado=tabla[fila][columna];
		fila=estado;

		if (fila==7){
			alert('Error');	
		}
		if (i==cadena.length-1) {
			switch(estado){
				2:alert('Es una cadena');
				  break;
				3:
				if (getReservedWord(cadena)) {
					alert('Es palabra reservada');
				}else{
					alert('Es un identificador');
				}
				4:alert('Es un simbolo no identificador');
				  break;
				5: alert('Es un numero');
				break;
				6: alert('Es un símbolo identificador');
				break;
			}
		}
	}

}

