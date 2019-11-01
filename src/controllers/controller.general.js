import {commonService} from '../services';

class GeneralController {
	static rotatePicture = (req, res) => {
		let {grid, k} = req.body;
		if(!grid || !k) {
			return res.status(500).send({msg: 'required params'})
		}
		let result = commonService.rotateArray(grid, k)
		return res.status(200).send({result})
	}
}

export default GeneralController;