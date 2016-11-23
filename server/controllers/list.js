var mongoose = require('mongoose');
var User = mongoose.model('User');
var List = mongoose.model('List');

module.exports=(function(){
  return{
    addList: function(req,res){
			var list = new List(req.body);
      list._user = req.session.user._id;
			list.save(function(err, data){
				if(err){
					console.log(err);
				}
				else{
					res.json(data);
				}
			})
		},

    index: function(req,res){
      if(req.session.user == undefined){
				console.log("no session user yet");
			}
      else{
        List.find({_user: req.session.user._id})
        .populate('_user')
        .exec(function(err, data){
          if(err){
            console.log(err,"errors here123");
          }
          else {
            List.populate(data, {path: '_user.name', model: 'User'}, function(err, results){
                  res.json(data);
            });

          }

        });
      }
},

      findList: function(req,res){
          List.find({_user: req.params.id})
          .populate('_user')
          .exec(function(err,data){
            List.populate(data, {path: '_user.name', model: 'User'}, function(err, results){
                res.json(data);
              });
          })
        },



}
})();
