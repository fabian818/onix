
//obtener palabras reservadas

function isIdentificator(value){
	return false;
}

function getReservedWord(key){
	var array = {
		'alias' : 'mo',
		'break' : 'me',
		'case':'mo',
		'class':'mo',
		'do':'mo',
		'else':'mo',
		'elsif':'mo',
		'end':'mo',
		'ensure':'mo',
		'false':'mo',
		'true':'mo',
		'for':'mo',
		'if':'mo',
		'in':'mo',
		'modulo':'mo',
		'next':'mo',
		'nil':'mo',
		'not':'mo',
		'or':'mo',
		'redo':'mo',
		'rescue':'mo',
		'retry':'mo',
		'return':'mo',
		'self':'mo',
		'super':'mo',
		'then':'mo',
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
		':' : 'dos puntos',
		'[' : 'abrir corchete',
		']' : 'cerrar corchete',
		'{' : 'abrir llave',
		'}' : 'cerrar llave',
		'(' : 'abrir parentesis',
		')' : 'cerrar paretensis',
		'_' : 'guion bajo'

	};
	return array[key];
}

