app.controller('sessionController', function($scope, $route, sessionFactory, listFactory, $routeParams){
		$scope.users = [];
		$scope.lists =[];
		$scope.userLists = [];
		$scope.sessionUsers =[];
		sessionFactory.checkSess(function(data){
		$scope.sessionUsers = data;
	});

	$scope.logReg = function(){
		if ($scope.newUser == undefined || $scope.newUser.length <= 3 ) {
			alert("Name cannot be blank and should be atleast 3 characters long")
		}
		else{
		sessionFactory.logReg($scope.newUser);
		$route.reload();
		}
	};

	if($routeParams.id){
	console.log($routeParams.id);
	listFactory.findList($routeParams, function(data){
		$scope.userLists = data;
	})
}

		sessionFactory.index(function(data){
		$scope.users = data;
	});

		listFactory.index(function(data){
		$scope.lists = data;
	})

});
