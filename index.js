$(document).ready(function()
{
  var x;
  x=$("#a");
  x.click(function(){
  alert(getElement('='));
	});
});

function getReservedWord(key){

}

function getElement(key){
	var array = {
		'=' : 'igual',

	};
	return array[key];
}


