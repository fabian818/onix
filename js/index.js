
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
  		if (getReservedWord(value)) {
  			result.html('Palabra reservada de tipo : ' + getType(getReservedWord(value)));
  		}
  		else{
  			if (getReservedWord(value)) {
  			result.html('Elemento lexico ' + getElement(value));
  			}else{
  				if (isIdentificator(value)) {

  				}else{
  					if (value === '') {
	  					result.html('Ingrese componente');
	  				}
	  				else{
	  					result.html('indefinido');
	  				};
  				};  								
  			};
  		};   		
	});
});

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

