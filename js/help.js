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

