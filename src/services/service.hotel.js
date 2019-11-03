import _ from 'lodash'

const reservate = (arrivals = [], departures = [], k = 0) => {
	let countRoom = 0, calendar = []
	arrivals.sort()
	departures.sort()

	arrivals.map(arrival => calendar.push({type: 'arrival', date: arrival}))
	departures.map(departure => calendar.push({type: 'departure', date: departure}))
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