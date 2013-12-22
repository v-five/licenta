	c._begRegSec('quse','');
	c.loader.loadFW('TextField','TextField',uic.factory,['quse',['quse_hotel_night_id']]);
	c.loader.loadFW('CheckBox','CheckBox',uic.factory,['quse',['quse_check_nonstop_id']]);
	c.loader.loadFW('Select','Select',uic.factory,['quse',['quse_time_from_id','quse_time_to_id','quse_travel_adult_id','quse_hotel_number_guest_id','quse_pick_up_time_id','quse_drop_off_time_id']]);
	c.loader.loadFW('DatePicker','DatePicker',uic.factory,['quse',[{
		id:'quse_date_to_id',
		tid:'quse_date_to_id',
		cid:'quse_date_to_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,
			START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	},
	{
		id:'quse_hotel_check_in_id',
		tid:'quse_hotel_check_in_id',
		cid:'quse_hotel_check_in_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,
			START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	},
	{
		id:'quse_pick_up_date_id',
		tid:'quse_pick_up_date_id',
		cid:'quse_pick_up_date_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	},
	{
		id:'quse_drop_off_date_id',
		tid:'quse_drop_off_date_id',
		cid:'quse_drop_off_date_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,
			START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	},
	{
		id:'quse_date_from_id',
		tid:'quse_date_from_id',
		cid:'quse_date_from_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,
			START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	},{
		id:'quse_hotel_check_out_id',
		tid:'quse_hotel_check_out_id',
		cid:'quse_hotel_check_out_id_calendar',
		openOnTF:true,
		conf:{
			pages:2,
			START_WEEKDAY:0,
			_default:'05/27/2012',
			mindate:'05/27/2012',
			maxdate:'03/27/2013',
			pagedate:'05/2012',
			datePattern:'dd/MM/yyyy',
			entryPattern:'',
			MULTI_SELECT:'false',
			SHOW_WEEKDAYS:'true',
			LOCALE_WEEKDAYS:'1char',
			LOCALE_MONTHS:'long'
		}
	}]]);
	c.loader.loadFW('AutoComplete','AutoComplete',uic.factory,['quse',[{
		id:'quse_car_drop_off_location_id',
		dataSrc:'HOTEL',
		parser:'HOTEL',
		input:'quse_car_drop_off_location_id_input',
		lngdpt:true,
		maxresults:15,
		div:'quse_car_drop_off_location_id_data'
	},
	{
		id:'quse_hotel_location_id',
		dataSrc:'HOTEL',
		parser:'HOTEL',
		input:'quse_hotel_location_id_input',
		lngdpt:true,
		maxresults:15,
		div:'quse_hotel_location_id_data'
	},
	{
		id:'quse_to_id',
		dataSrc:'AIR',
		parser:'AIR',
		input:'quse_to_id_input',
		lngdpt:true,
		maxresults:15,
		div:'quse_to_id_data'
	},
	{
		id:'quse_car_pick_up_location_id',
		dataSrc:'HOTEL',
		parser:'HOTEL',
		input:'quse_car_pick_up_location_id_input',
		lngdpt:true,
		maxresults:15,
		div:'quse_car_pick_up_location_id_data'
	},
	{
		id:'quse_from_id',
		dataSrc:'AIR',
		parser:'AIR',
		input:'quse_from_id_input',
		lngdpt:true,
		maxresults:15,
		div:'quse_from_id_data'
	}]]);
	c.loader.loadFW('Check','Check',uic.factory,['quse',['quse_hotel_night_id']]);
	c._endRegSec('quse','');