function cauta_avion() {
	$.ajax({
		type: 'POST',
		url: 'proxy2.php',
		data: {link:'action=doflights&oneway=n&origin='+escape($("#origin").val())+'&destination='+escape($("#destination").val())+'&depart_date='+escape("1/06/2012")+'&depart_time=a&return_date='+escape("08/06/2012")+'&return_time=a&cabin=e'	
		
		},
		success: function(result) {
			var $response=$(result);
			
			var val1 = $response.find('#content_div').each(function(){
        		var item_text = $(this).text();
        		$('<li></li>').html(item_text).appendTo('ol');
        	});
			
			$('#result3').html(val1);
		}
	});
	
}
