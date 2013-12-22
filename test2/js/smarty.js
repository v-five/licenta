function smartyphp(ceva){
	$.ajax({
		type: 'POST',
		url: 'http://localhost/f/smarty.php',
		data: {link:escape(ceva)
		
		
		},
		success: function(result) {
			alert(resultat)
		}
	});
	
}
