$(document).ready(
	function(){
		$("#lexema").click(
			function(){
				text = $(this).val();
				$("#nombre").val(text);
			}
		);
		$("#nombre").click(
			function(){
				text = $(this).val();
				$("#lexema").val(text);
			}
		);
	}
);