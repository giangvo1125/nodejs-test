import ProductInput from './product.input'

class ProductBundle extends ProductInput {
	constructor(age, student, income) {
		super(age, student, income)
	}
	getBundle = () => {
		let {age, isStudent, income} = this
		if(age > 17) {
			if(isStudent === true) {
				return 0
			}
			else if(income > 40000) {
				return 3
			}
			else if(income > 12000) {
				return 2
			}
			else if(income > 0) {
				return 1
			}
		}
		else {
			return 0
		}
	}
}

export default ProductBundle