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


