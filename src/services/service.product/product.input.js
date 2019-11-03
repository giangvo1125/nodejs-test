class ProductInput {
	constructor(age, student, income) {
		this.age = age
		this.isStudent = student
		this.income = income
	}

	_validateAge = () => new Promise((resolve, reject) => {
		let {age} = this
		if(age === null || age === undefined) {
			resolve('age is required')
		}
		else if(age !== parseInt(age, 10)) {
			resolve('age is not interger')
		}
		else if(age < 0) {
			resolve('age must be 0-17, 18-64, 65+')	
		}
		else {
			resolve()
		}
	})

	_validateIsStudent = () => new Promise((resolve, reject) => {
		let {isStudent} = this
		if(isStudent === '' || isStudent === undefined) {
			resolve('student is required')
		} 
		else if(typeof isStudent !== 'boolean') {
			resolve('student must be boolean')
		}
		else {
			resolve()
		}
	})

	_validateIncome = () => new Promise((resolve, reject) => {
		let {income} = this
		if(income === null || income === undefined) {
			resolve('income is required')
		}
		else if(income !== parseInt(income, 10)) {
			resolve('income is not interger')
		}
		else if(income < 0) {
			resolve('income must be greater 0')	
		}
		else {
			resolve()
		}
	})

	validate = () => new Promise((resolve, reject) => {
		let promises = []
		promises.push(this._validateAge())
		promises.push(this._validateIsStudent())
		promises.push(this._validateIncome())
		Promise.all(promises)
		.then(responses => {
			let errorMessages = []
			if(responses) {
				if(typeof responses === 'string') {
					reject(responses)
				}
				else {
					responses.map(error => {
						if(error)
							errorMessages.push(error)
					})
					if(errorMessages && Array.isArray(errorMessages) && errorMessages.length > 0) {
						reject(errorMessages)
					}
					else {
						resolve()
					}
				}
			}
			else {
				resolve()
			}
		}, err => {
			reject('something went wrong')
		})
	})
}

export default ProductInput