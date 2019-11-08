import _ from 'lodash'

const addDatesToCalendar = (type, dates, calendar) => {
	dates.map(date => calendar.push({type, date}))
}

const reservate = (arrivals = [], departures = [], k = 0) => {
	let countRoom = 0
	let calendar = []
	arrivals.sort()
	departures.sort()
	addDatesToCalendar('arrival', arrivals, calendar)
	addDatesToCalendar('departure', departures, calendar)
	calendar = _.sortBy(calendar, 'date')
	
	for(var i = 0; i < calendar.length; i++) {
		var booking = calendar[i]
		if(booking.type == 'arrival') {
			countRoom++
			if(countRoom > k) {
				return false
			}
		}
		else {
			countRoom--
		}
	}
	return true	
}

module.exports = {
	reservate
}