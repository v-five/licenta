function cauta_avion() {
	$.ajax({
		type: 'POST',
		url: 'proxy2.php',
		data: {link:'action=doflights&oneway=n&origin='+escape($("#origin").val())+'&destination='+escape($("#destination").val())+'&depart_date='+escape($("#date2").val())+'&depart_time=a&return_date='+escape($("#date3").val())+'&return_time=a&cabin=e'	
		
		},
		success: function(result) {
			var $response=$(result);
			
			
			if ($response.find('.msg').text().indexOf("No matching results") !=-1) {
				$('#airplane').remove();
				$('#air').append("<div id=\"airplane\"></div>");
				$('#airplane').append("Ne pare rau, nu sau gasit rezultate.");
			}
			
			
			if ($response.find('#helptext').text().indexOf("If you are not automatically redirected") !=-1) {
				$('#airplane').remove();
				$('#air').append("<div id=\"airplane\"></div>");
				$('#airplane').append("<script type=\"text/javascript\">document.location=\"http://uk.bestfares.amadeus.net/help/human.html?out=%3Fnull\";</script>");
			}
			
			var val2 = $response.find('#content_div').each(function(){
				var airport2 = $(this).find('.airport').text();
				var airport1 = airport2.replace( /\s/g, "");
				var br=0;
				var airport3="";
				for(i=0; i<airport1.length; i++){
					if(br<3){
						airport3=airport3+airport1[i];
						br++;
					}
					else{
						var airport3=airport3+" "+airport1[i];
						br=1;
					}
				}
				var airport = airport3.split(" ");
				
				//select price
				var price2 = $(this).find(".results_price.bookitprice").text();
				var price1 = price2.replace( /\s/g, "");
				var price3=price1[0];
				for(i=1; i<price1.length; i++){
					if(price1[i]!=price1[0]){
						price3=price3+price1[i];
					}
					else{
						var price3=price3+" "+price1[i];
					}
				}
				var price = price3.split(" ");
				
				//select time
				var time2 = $(this).find('.flighttime').text();
				var time1 = time2.replace( /\s/g, "");
				var br=0;
				var time3="";
				for(i=0; i<time1.length; i++){
					if(br<5){
						time3=time3+time1[i];
						br++
					}
					else{
						var time3=time3+" "+time1[i];
						br=1;
					}
				}
				var time = time3.split(" ");
				
				//select duration
				var duration2 = $(this).find('.duration').text();
				var duration1 = duration2.replace( /\s/g, "");
				var br=0;
				var duration3="";
				for(i=0; i<duration1.length; i++){
					if(br==0){
						duration3=duration3+duration1[i];
					}
					else{
						var duration3=duration3+" "+duration1[i];
					}
					if(duration1[i]=="m")
						br=1;
					else
						br=0;
				}
				var duration = duration3.split(" ");
				
				//select origin
				origin2=$("#origin").val();
				i=0;
				var origin="";
				while(origin2[i]!=","){
					origin=origin+origin2[i];
					i++;
				}
				
				//select destination
				destination2=$("#destination").val();
				i=0;
				var destination="";
				while(destination2[i]!=","){
					destination=destination+destination2[i];
					i++;
				}
				
				//print answer
				$('#airplane').remove();
				$('#air').append("<div id=\"airplane\"></div>");
				var dif=0;
				var difd=0;
				for(i=0; i<price.length; i++){
					$('#airplane').append("<h3><a href=\"#\">Price: "+price[i]+"</a></h3>");
					$('#airplane').append("<div>Depart: "+origin+" ("+airport[i+dif]+") "+time[i+dif]+" -> "+destination+" ("+airport[i+dif+1]+") "+time[i+dif+1]+"<br>Duration: "+duration[i+difd]+"<br>Return: "+destination+" ("+airport[i+dif+2]+") "+time[i+dif+2]+" -> "+origin+" ("+airport[i+dif+3]+") "+time[i+dif+3]+"<br>Duration: "+duration[i+difd+1]+"<br></div>");
					dif=dif+3;
					difd=difd+1;
				}
				//acordion input
				$(function() {
					$( "#airplane" ).accordion();
				});	
			});
		}
	});
}


function cauta_tren() {
	$.ajax({
		type: 'POST',
		url: 'proxy.php',
		data: {link:'http://fahrplan.oebb.at/bin/query.exe/dn?start=1&S='+escape($("#from").val())+'&Z='+escape($("#to").val())+'&REQ0JourneyDate='+escape($("#date").val())+'&time='+escape($("#time").val())
		
		
		},
		success: function(result) {
			var $response=$(result);
			$('#train').remove();
			$('#tren').append("<div id=\"train\"></div>");
			var val1 = $response.find('#trOverviewC0-0').each(function(){
				$('#train').append("<h3><a href=\"#\">Solution 1</a></h3>");
				var date = $(this).find('.date').text();
				if(date.length>8){
					var date1="";
					for(i=0; i<=date.length-9; i++){
						date1=date1+date[i];
					}
					date=date1;
				}
				var time2 = $(this).find('.planed').text();
				var time = time2.split(time2[9]);
				var time1 = time[1].split(" ");
				var departTime=time1[0];
				var time1 = time[2].split(" ");
				var arriveTime=time1[0];
				var origin=$("#from").val();
				var destination=$("#to").val();
				var duration = $(this).find('.duration').text();
				$('#train').append("<div>Date: "+date+"<br>Depart: "+origin+" "+departTime+"<br>Arrive: "+destination+" "+arriveTime+"</br>Duration: "+duration+"</div>");
			});
			var val2 = $response.find('#trOverviewC0-1').each(function(){
				$('#train').append("<h3><a href=\"#\">Solution 2</a></h3>");
				var date = $(this).find('.date').text();
				if(date.length>8){
					var date1="";
					for(i=0; i<=date.length-9; i++){
						date1=date1+date[i];
					}
					date=date1;
				}
				var time2 = $(this).find('.planed').text();
				var time = time2.split(time2[9]);
				var time1 = time[1].split(" ");
				var departTime=time1[0];
				var time1 = time[2].split(" ");
				var arriveTime=time1[0];
				var origin=$("#from").val();
				var destination=$("#to").val();
				var duration = $(this).find('.duration').text();
				$('#train').append("<div>Date: "+date+"<br>Depart: "+origin+" "+departTime+"<br>Arrive: "+destination+" "+arriveTime+"</br>Duration: "+duration+"</div>");
			});
			var val3 = $response.find('#trOverviewC0-2').each(function(){
				$('#train').append("<h3><a href=\"#\">Solution 3</a></h3>");
				var date = $(this).find('.date').text();
				if(date.length>8){
					var date1="";
					for(i=0; i<=date.length-9; i++){
						date1=date1+date[i];
					}
					date=date1;
				}
				var time2 = $(this).find('.planed').text();
				var time = time2.split(time2[9]);
				var time1 = time[1].split(" ");
				var departTime=time1[0];
				var time1 = time[2].split(" ");
				var arriveTime=time1[0];
				var origin=$("#from").val();
				var destination=$("#to").val();
				var duration = $(this).find('.duration').text();
				$('#train').append("<div>Date: "+date+"<br>Depart: "+origin+" "+departTime+"<br>Arrive: "+destination+" "+arriveTime+"</br>Duration: "+duration+"</div>");
			});
			//acordion input
			$(function() {
				$( "#train" ).accordion();
			});
		}
	});
	
}