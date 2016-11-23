app.factory('listFactory', function($http){
  var factory = {};

  factory.addList = function(list){
    $http.post('/user/list', list).success(function(data){
  })
};

factory.index = function(callback){
    $http.get('/list/all').success(function(output){
    callback(output);
    })
  };

  factory.findList = function(idobj, cb){
    $http.get('/user/lists/' + idobj.id).success(function(output){
      cb(output);
    })
    .error(function(){
      console.log(err);
    })
  };

  return factory;

});
