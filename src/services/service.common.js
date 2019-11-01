import _ from 'lodash'

const reverse = array => [...array].reverse()
const compose = (a, b) => x => a(b(x))

const rotate = array => (
	array[0].map((column, index) => (
    	array.map(row => row[index])
  	))
)

const rotateArray = (array = [], n = 0) => {
	if(n > 0 && n%4 != 0) {
		let func = compose(rotate, reverse)
		array = func(array)
		n--;
		return rotateArray(array, n)
	}
	else {
		return array
	}
}

const hotelReservate = (arrivals = [], departures = [], k = 0) => {
	var countRoom = 0;
	arrivals.sort();
	departures.sort();
	var calendar = []

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
	rotateArray,
	hotelReservate
}