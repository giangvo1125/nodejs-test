process.env.CONFIG = 'development'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

const instance = chai.request(server)

describe('Hotel', () => {
    beforeEach((done) => {
        done()
    })
    describe('Hotel Reservation', () => {
        it('it should return true because at day = 5, there are 2 guests in the hotel and we have 2 rooms', done => {
            let arrivals = [1, 3, 5],
            	departures = [2, 6, 10],
            	k = 2
            chai.request(server)
            	.post('/api/hotel-booking')
            	.send({arrivals, departures, k})
            	.end((err, res) => {
            		res.should.have.status(200)
            		res.should.be.a('object')
            		res.body.should.have.property('result')
            		res.body.result.should.eql(true)
            		done()
            	})
        })
        it('it should return false because at day = 5, there are 2 guests in the hotel but we have only one room', done => {
            let arrivals = [1, 3, 5],
                departures = [2, 6, 10],
                k = 1
            chai.request(server)
                .post('/api/hotel-booking')
                .send({arrivals, departures, k})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    res.body.should.have.property('result')
                    res.body.result.should.eql(false)
                    done()
                })
        })
    })
})