
//función principal
$(document).ready(function()
{
  relationLists("#nombre", "#lexema");
  $("#textid").keyup(function(){
  		value = $(this).attr('value');
  		result = $("#result");
  		setListFromArray(getArrayFromText(value));
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