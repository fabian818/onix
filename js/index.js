
//función principal
$(document).ready(function()
{
  var x;
  x=$("#a");

  x.click(function(){
  		alert('Esto pasa cuando te metes con chibolas.');
	});

  y = $("#textid")
  y.on('change keyup paste' ,function(){
  		value = $(this).attr('value');
  		result = $("#result")
  		if (getElement(value)) {
  			result.html('Elemento lexico ' + getElement(value));
  		}
  		else{
  			if (getReservedWord(value)) {
  				result.html('Palabra reservada de tipo : ' + getType(getReservedWord(value)));
  			}else{
  				result.html('Ingrese componente');
  			};
  		};   		
	});
});

//obtener palabras reservadas

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
        'int':'mo',
		'float':'mo',
		'decimal':'mo',
		'double':'mo',
		'date':'mo',
		'datetime':'mo'


	};
	return array[key];
}

function getType(key){
	var array = {
		'ol' : 'operador lógico',
		'oa' : 'operador aritmético',
		'mo' : 'modificador',
		'me' : 'método'
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

