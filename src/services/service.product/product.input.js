class ProductInput {
	constructor(age, student, income) {
		this.age = age
		this.isStudent = student
		this.income = income
	}

	_validateAge = () => {
		let {age} = this
		if(age === null || age === undefined) {
			return 'age is required'
		}
		else if(age !== parseInt(age, 10)) {
			return 'age is not interger'
		}
		else if(age < 0) {
			return 'age must be 0-17, 18-64, 65+'
		}
		return ''
	}

	_validateIsStudent = () => {
		let {isStudent} = this
		if(isStudent === '' || isStudent === undefined) {
			return 'student is required'
		} 
		else if(typeof isStudent !== 'boolean') {
			return 'student must be boolean'
		}
		return ''
	}

	_validateIncome = () => {
		let {income} = this
		if(income === null || income === undefined) {
			return 'income is required'
		}
		else if(income !== parseInt(income, 10)) {
			return 'income is not interger'
		}
		else if(income < 0) {
			return 'income must be greater 0'	
		}
		return ''
	}

	validate = () => new Promise((resolve, reject) => {
		let errors = [],
			ageValidateMsg = this._validateAge(),
			studentValidateMsg = this._validateIsStudent(),
			incomeValidateMsg = this._validateIncome()
		
		if(ageValidateMsg || studentValidateMsg || incomeValidateMsg) {
			if(ageValidateMsg) {
				errors.push(ageValidateMsg)
			}
			if(studentValidateMsg) {
				errors.push(studentValidateMsg)
			}
			if(incomeValidateMsg) {
				errors.push(incomeValidateMsg)
			}
			reject(errors)
		}
		resolve()
	})
}

export default ProductInput