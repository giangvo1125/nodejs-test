import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import {port} from '../config'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

require('./routes')(app)

const server = http.createServer(app)
server.listen(port, () => {
	console.log('Ready console on port %d', server.address().port)
})

module.exports = server;