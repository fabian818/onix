
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
  			}
  			else{
  				result.html('indefinido');
  			};
  		};
  		
	});
});

//obtener palabras reservadas

function getReservedWord(key){
	var array = {
		'alias' : 'mo',
		'and' : 'ol',
		'break' : 'me'
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
		"'" : 'comilla simple'		
	};
	return array[key];
}


