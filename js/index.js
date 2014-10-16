
//función principal
$(document).ready(function()
{
  var x;
  x=$("#a");
  x.click(function(){
  		alert(getElement("'"));
	});
  y = $("#textid")
  y.blur(function(){
  		value = $("#textid").attr('value');
  		if (getElement(value)) {
  			alert('Elemento lexico' + getElement(value));
  		}
  		else{
  			if (getReservedWord(value)) {
  				alert('Palabra reservada de tipo : ' + getType(getReservedWord(value)));
  			}
  			else{
  				alert('indefinido');
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


