var session = require('./../controllers/session.js');
var list = require('./../controllers/list.js');

module.exports = function(app){
	app.post('/user/login', function(req, res){
		session.logReg(req, res)
	})
	app.get('/logout', function(req, res){
		session.logout(req, res)
	})
	app.get('/user/checksess', function(req, res){
		session.checkSess(req, res)
	})

	app.get('/user/all', function(req, res){
		session.index(req,res);
	})

	app.post('/user/list', function(req,res){
		list.addList(req,res);
	})

	app.get('/list/all', function(req,res){
		list.index(req, res);
	});

	app.get('/user/lists/:id', function(req,res){
		list.findList(req,res);
	});
}
