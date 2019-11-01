const reverse = array => [...array].reverse()
const compose = (a, b) => x => a(b(x))

const rotate = array => (
	array[0].map((column, index) => (
    	array.map(row => row[index])
  	))
)

const rotateArray = (array, n) => {
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

module.exports = {
	rotateArray
}