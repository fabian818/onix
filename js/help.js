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
		options= options+ getOption(array[i-1],i);
	};
	lexema.html(options);
	/*comment */
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

//obtener palabras reservadas

function isIdentificator(value){
	return false;
}

function getReservedWord(key){
	var array = {
		'alias' : 'mo',
		'break' : 'me',
		//Operadores lógicos
		'and' : 'ol',
		'or':'ol',
		'not':'ol',
		'&&' : 'ol',
		'||':'ol',

		
		//Operadores Aritmeticos
		'+':'oa',
		'-':'oa',
		'*':'oa',
		'/':'oa',
		'>':'oa',
		'<':'oa',
        //Operadores modificador 
        'int':'td',
		'float':'td',
		'decimal':'td',
		'double':'td',
		'date':'td',
		'datetime':'td'
	};
	return array[key];
}

function getType(key){
	var array = {
		'ol' : 'operador lógico',
		'oa' : 'operador aritmético',
		'mo' : 'modificador',
		'me' : 'método',
		'td' : 'tipo de dato'
	};
	return array[key];
}

//Obtener elementos léxicos
//

function getElement(key){
	var array = {
		'=' : 'igual',
		'"' : 'comilla doble',
		"'" : 'comilla simple',
		'.' : 'punto',
		',' : 'coma',
		';' : 'punto y coma',
		':' : 'dos punto',
		'[' : 'abrir corchete',
		']' : 'cerrar corchete',
		'{' : 'abrir llave',
		'}' : 'cerrar llave',
		'(' : 'abrir parentesis',
		')' : 'cerrar paretensis',
		'-' : 'guion',
		'_' : 'guion abajo'

	};
	return array[key];
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

function isSimboloIdentificador(caracter){

	var simbolos = ['_','$','ç','Ç','"'];
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
