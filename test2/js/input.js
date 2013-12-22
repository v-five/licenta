//suggest input
gSuggest_for_company = 'oebb';
new FSuggest({loc:"from",
type:"S",
minChar:4,
cookiename:"DB4bibe-history",
requestURL:"http://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=7&REQ0JourneyStopsB=12&S=",
stopDelay:300 })

gSuggest_for_company = 'oebb';
new FSuggest({loc:"to",
type:"S",
minChar:4,
cookiename:"DB4bibe-history",
requestURL:"http://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=7&REQ0JourneyStopsB=12&S=",
stopDelay:300 })

//time input
$("#time").each(function(){
	var _this = jQuery(this),
		timeObject = new Date(),
		_hours = timeObject.getHours(),
		_minutes = timeObject.getMinutes();
	
	if(_minutes.toString().length < 2){ _minutes = '0' + _minutes; }
	var _time = _hours + ':' + _minutes;
	_this.val(_time)
});

//date input
var d=new Date();
var weekday=new Array(7);
weekday[0]="Su";
weekday[1]="Mo";
weekday[2]="Tu";
weekday[3]="We";
weekday[4]="Th";
weekday[5]="Fr";
weekday[6]="Sa";
$("#date").each(function(){
	var _this = jQuery(this),
		dateObject = new Date(),
		_dayn = weekday[dateObject.getDay()],
		_day = dateObject.getUTCDate(),
		_month = dateObject.getMonth() + 1,
		_year = dateObject.getFullYear().toString();
	if(_month<10)
	_month = "0"+_month;
	_this.val(_day + '.' + _month + '.' + _year);
});

$(function() {
	$( "#date" ).datepicker({ minDate: 0, dateFormat: "dd.mm.yy"});
});

$("#date2").each(function(){
	var _this = jQuery(this),
		dateObject = new Date(),
		_dayn = weekday[dateObject.getDay()],
		_day = dateObject.getUTCDate(),
		_month = dateObject.getMonth() + 1,
		_year = dateObject.getFullYear().toString();
	if(_month<10)
	_month = "0"+_month;
	_this.val( _day + '/' + _month + '/' + _year);
});

$("#date3").each(function(){
	var _this = jQuery(this),
		today = new Date(),
		dateObject = new Date(today.getTime() + (7*24 * 60 * 60 * 1000)),
		_dayn = weekday[dateObject.getDay()],
		_day = dateObject.getDate(),
		_month = dateObject.getMonth() + 1,
		_year = dateObject.getFullYear().toString();

	if(_month<10)
		_month = "0"+_month;
	_this.val( _day + '/' + _month + '/' + _year);
});

$(function() {
		$( "#date2" ).datepicker({
			minDate: 0,
			dateFormat: "dd/mm/yy",
			onSelect: function( selectedDate ) {
				minD=$('#date2').datepicker("getDate");
				$( "#date3" ).datepicker( "option", "minDate", new Date(minD.getTime() + (7*24 * 60 * 60 * 1000)));
			}
		});
		$( "#date3" ).datepicker({
			dateFormat: "dd/mm/yy",
			onSelect: function( selectedDate ) {
				$( "#date2" ).datepicker( "option", "maxDate", selectedDate );
			}
		});
});


//button input
$(function() {
	$( "input:submit", "#tren, #air" ).button();
});


//tabs input
$(function() {
	$( "#tabs" ).tabs();
});


//timepicker input
$(function() {
	$('#time').timepicker({});
});