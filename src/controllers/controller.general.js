import {rotateService, productService, hotelService} from '../services';

class GeneralController {
	static rotatePicture = (req, res) => {
		let {grid, k} = req.body
		if(!grid || !k) {
			return res.status(500).send({msg: 'required params'})
		}
		let result = rotateService.rotateMatrix(grid, k)
		return res.status(200).send({result})
	};
	
	static hotelBooking = (req, res) => {
		let {arrivals, departures, k} = req.body
		let result = hotelService.reservate(arrivals, departures, k)
		return res.status(200).send({result})
	};

	static productRecomment = async (req, res) => {
		try {
			let {age, student, income} = req.body
			const product = new productService.ProductBundle(age, student, income)
			await product.validate()
			const bundle = product.getBundle()
			return res.status(200).send({bundle})
		} catch(err) {
			return res.status(500).send({err: err})
		}
	};
}

export default GeneralController