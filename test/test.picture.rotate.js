process.env.CONFIG = 'development'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

const instance = chai.request(server)

describe('Rotate', () => {
    beforeEach((done) => {
        done()
    })
    describe('Rotate Array', () => {
        it('it should rotate array', done => {
            let grid = [
            	[1, 2, 3],
            	[1, 2, 3],
            	[1, 2, 3]
            ],
            	modifyGrid = [
            	[1, 1, 1],
            	[2, 2, 2],
            	[3, 3, 3]
            ],
            	k = 1
            chai.request(server)
            	.post('/api/rotate-picture')
            	.send({grid, k})
            	.end((err, res) => {
            		res.should.have.status(200)
            		res.should.be.a('object')
            		res.body.should.have.property('result')
            		res.body.result.should.eql(modifyGrid)
            		done()
            	})
        })
        it('it should error when not pass grid and k parameter', done => {
        	chai.request(server)
            	.post('/api/rotate-picture')
            	.send({})
            	.end((err, res) => {
            		res.should.have.status(500)
            		res.should.be.a('object')
            		res.body.should.have.property('msg')
            		res.body.msg.should.eql('required params')
            		done()
            	})
        })
    })
})