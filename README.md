# MeanExamPrep02
 Node.js, Express + JavaScript Backend Testing

#### Why would you consider a Scripting Language as JavaScript as your Backend Platform.
 
- Simple to use
- Package development like JQuery, Node, Angula 
- Don’t have to compile

####Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat

######Pros

- Simple to use, example:

	var express = require('express')
	
	var app = express()
	
	app.get('/', function (req, res) { res.send('Hello World') })
	
	app.listen(3000)
- Package Market evolves and updates everyday (Lots of package developers)

###### Cons

- You have to get middlewares from NPM. If it isnt a standard middleware, but something you havent used before, you have to look it up on the market before you install it, else you could end up with bad or old code.

#### Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

Theres two different ways to do it, the first option is to each single core in their own virtual machine. 
The other option and the most efficient are to use the cluster module, which already is installed in Node.js 0.8+. With the cluster module, you have a master process which contains workers (child). You only have to make the amount of workers for the amount of cores your computer have. The last option doesn’t need a virtual machine for a worker to run.


#### Explain, using relevant examples, concepts related to the testing a REST-API using Node/JavaScript + relevant packages.

To make automated tests, you can use the mocha, chai and request libraries. When you are writing a test, you start with a describe section, where you explain what you are going to test, and then a callback function. Inside the callback you write the tests, which starts with it and then an explaining String about the test and a callback function. Inside “its” callback function, you use the request library to call your api. Remember the done function, else it will get stuck and get a timeout.

describe("Quick CRUD test", function() {

    it("should return array", function (done) {
        request.get(url, function (error, res, body) {

            expect(res.statusCode).to.be.equal(200);
            var testArray = JSON.parse(res.body); 
            done();
        });

    });
});

####Explain, using relevant examples, the Express concept; middleware.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

There are five different types of middlewares:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

As you can see in the example, you have to call next(); else it won’t go to the next middleware. The example has to be last in the document, else it will recognize the 404 error code before the real code, and then go to the next middleware which is development error handler or the production error handler.

// catch 404 and forward to error handler

	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

// error handlers
// development error handler
// will print stacktrace

	if (app.get('env') === 'development') {
	  app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	     error: err
	    });
	  });
	};

// production error handler
// no stacktraces leaked to user

	app.use(function(err, req, res, next) {
  	  res.status(err.status || 500);
  	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});

#### Explain, using relevant examples, how to implement sessions, and the legal implications of doing this

By using cookies, you can store information about the user, like a username or/and password.
If you use cookies for login sessions, then you don’t have to tell the user you are using cookies. If you are using cookies for information about the users behavior then you have to alert the user about the usage of cookies. When you create a session you provide it with a secret, which is the sessions ID.

	app.use(session({
  	  genid: function(req) {
    	    return genuuid() // use UUIDs for session IDs 
  	  },
  	  secret: 'keyboard cat'
	}));

#### Compare the express strategy toward (server side) templating with the one you used with Java on second
semester

The server side strategy in express works like the strategy in Java. Both in express and java its a server sided application
which means its the server that renders the webpage. 

####Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show
how you can "test" all the four CRUD operations programmatically using for example the Request package.

Check both rest.js and restTest.js to see examples and comments. I am using Chai, Mocha and Request libraries.

####Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to
test asynchronous code.

Check both rest.js and restTest.js to see examples and comments. I am using Chai, Mocha and Request libraries.

####Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

To ensure that your tests works, you are using a hardcoded mock which contains data you can test with your CRUD tests.
The mock prevent your tests from failing when you are testing the functionality. If you didnt use a mock, and testet
for something on your database and sudently someone changed the data your tests would fail. 
The mock makes it faster to test instead of using postman.

	var nock = require('nock');
 
	var couchdb = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                 });







