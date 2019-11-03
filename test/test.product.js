process.env.CONFIG = 'development'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

const instance = chai.request(server)

describe('Product', () => {
    beforeEach((done) => {
        done()
    })
    describe('Recommendation', () => {
        it('it should returns a recommended bundle 0 when user is student', done => {
            const age = 17, student = true, income = 0
            chai.request(server)
            	.post('/api/product-recomment')
            	.send({age, student, income})
            	.end((err, res) => {
            		res.should.have.status(200)
            		res.should.be.a('object')
            		res.body.should.have.property('bundle')
                    res.body.bundle.should.eql(0)
            		done()
            	})
        })
        it('it should returns a recommended bundle 0 when age < 18', done => {
            const age = 17, student = false, income = 10000
            chai.request(server)
                .post('/api/product-recomment')
                .send({age, student, income})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    res.body.should.have.property('bundle')
                    res.body.bundle.should.eql(0)
                    done()
                })
        })
        it('it should returns a recommended bundle 1 when age > 17 and income > 0', done => {
            const age = 18, student = false, income = 1000
            chai.request(server)
                .post('/api/product-recomment')
                .send({age, student, income})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    res.body.should.have.property('bundle')
                    res.body.bundle.should.eql(1)
                    done()
                })
        })
        it('it should returns a recommended bundle 2 when age > 17 and income > 12000', done => {
            const age = 18, student = false, income = 13000
            chai.request(server)
                .post('/api/product-recomment')
                .send({age, student, income})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    res.body.should.have.property('bundle')
                    res.body.bundle.should.eql(2)
                    done()
                })
        })
        it('it should returns a recommended bundle 3 when age > 17 and income > 40000', done => {
            const age = 23, student = false, income = 45000
            chai.request(server)
                .post('/api/product-recomment')
                .send({age, student, income})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    res.body.should.have.property('bundle')
                    res.body.bundle.should.eql(3)
                    done()
                })
        })
    })
})