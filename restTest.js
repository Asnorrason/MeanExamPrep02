'use strict'
var expect = require('chai').expect;
var nock = require('nock');
var rest = require('../routes/rest.js');
var request = require('request');

var url = "http://localhost:3000/api/rest";

var x = 1;

var n = nock('http://localhost:3000/api/rest');

describe("Quick CRUD test", function() {

        it("should return array", function (done) {
            request.get(url, function (error, res, body) {

                expect(res.statusCode).to.be.equal(200);
                var testArray = JSON.parse(res.body);
                console.log(testArray.number)
                done();
            });

        });

    it("Should add a number to the array", function(done){
        request.post({url: url+"/number", form: {number: 5}, contentType: "application/json"}, function(err, res, body){
            console.log("POST ")
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it("Should update a given number in the array", function(done){
        request.put(url+"/2/2", function(err, res, body){
            console.log("PUT ");
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(res.body).message).to.be.equal("Changed to: 2");

            done();

        });
    });

    it("Should delete number by index", function(done){
       request.del(url+"/5", function(err, res, body){
           console.log("DELETE ")
           expect(res.statusCode).to.be.equal(200);
           done();
       });
    });
});