var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
	.when('/logreg', {
		templateUrl: 'partials/logreg.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})

	.when('/home', {
		templateUrl: 'partials/dashboard.html'
	})

	.when('/bucketlist', {
		templateUrl: 'partials/dashboard.html'
	})

	.when('/:id', {
		templateUrl: 'partials/bucketlist.html'
	})

	.otherwise({
		redirectTo: '/logreg'
	});

})
