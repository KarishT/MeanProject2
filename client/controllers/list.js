app.controller('listController', function($scope, $route, $routeParams, listFactory, $location){


  $scope.addList= function(){
    if($scope.newList == undefined || $scope.newList.length < 5){
      alert('Both fields are required and title and description are atleast 5 and 10 characters resp  ')
    }
    else{
      listFactory.addList($scope.newList);
      $route.reload();
    }
  };

})
