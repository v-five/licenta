    jq(function() {
        var e = document.flights;

    form = new R9.fd.flights.Form(jq.extend({"smartboxHistory":[{"code":"ap-BQH/28501","className":"ap","display":"London, United Kingdom - Biggin Hill (BQH)"},{"code":"ap-PAR/36014","className":"ap","display":"Paris, France - All airports (PAR)"},{"code":"ap-TSR/14912","className":"ap","display":"Timisoara, Romania - Timisoara (TSR)"},{"code":"ap-PHL/1458","className":"ap","display":"Philadelphia, PA, United States - Philadelphia (PHL)"}],"history":[{"cabin":"e","fid":"","leg":[{"origin":"BQH","destination":"PAR","leave":"05/31/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null},{"origin":"PAR","destination":"BQH","leave":"06/07/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null}],"sdestlocation":"Paris, France","snonstop":false,"travelers":1,"adults":0,"children":0,"childAges":null,"seniors":0,"weekend":false,"openflexrange":""},{"cabin":"e","fid":"","leg":[{"origin":"TSR","destination":"PHL","leave":"05/31/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null},{"origin":"PHL","destination":"TSR","leave":"06/07/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null}],"sdestlocation":"Philadelphia, PA, United States","snonstop":false,"travelers":1,"adults":0,"children":0,"childAges":null,"seniors":0,"weekend":false,"openflexrange":""},{"cabin":"e","fid":"","leg":[{"origin":"TSR","destination":"PAR","leave":"05/31/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null},{"origin":"PAR","destination":"TSR","leave":"06/07/2012","timechoice":"a","nearbyO":false,"nearbyD":false,"flexdate":"exact","day1":null,"day2":null}],"sdestlocation":"Paris, France","snonstop":false,"travelers":1,"adults":0,"children":0,"childAges":null,"seniors":0,"weekend":false,"openflexrange":""}],"useLast":true,"isFullResearchForm":false,"defaultFlexVal":"plusminusthree","departDate":"5/31/2012","flyNow":false,"isBuzzCalendarEnabled":true,"isOpenFlexEnabled":false,"lastAirport":"BQH","returnDate":"6/7/2012","smartUrl":"/f/smarty","submitOnPost":false,"suppressBuzzCal":false,"flexDateCategory":"exact"}, {e: e}));

            if (!e.origin.value) {
            e.origin.focus();
        } else {
            e.destination.focus();
        }
    
if (document.lasttab.havesearched.value == 'false') {
    
    var today = jq.r9datepicker.parseDate("5/31/2012");
    e.datelimit.value = (today.getMonth() - 0 + 1) + "/" + today.getDate() + "/" + today.getFullYear();
}


form.toggleOneWay(true);


form.toggleFlexCategory();


form.showPromo();

compare2initializing = false;
compare2chk();    });