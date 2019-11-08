const compose = a => x => a([...x].reverse())

const rotate90Deg = array => (
	array[0].map((column, index) => (
    	array.map(row => row[index])
  	))
)

const rotateMatrix = (array = [], n = 0) => {
	if(array && Array.isArray(array) && array.length > 0) {
		let excuteFunction = compose(rotate)
		let k = n % 4
		if(k > 0) {
			for(let i = 0; i < k; i++) {
				array = excuteFunction(array)
			}
		}
		return array
	}
	else {
		return array
	}
}

module.exports = {
	rotateMatrix
}