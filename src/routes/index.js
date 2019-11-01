import _ from 'lodash'
import api from './route.general'

module.exports = app => {
	var routes = {}
	_.extend(routes, api(app))
	return routes
}