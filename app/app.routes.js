app.config(['$routeProvider', function($routeProvider) {
	var scrollContent = function() {
  	$window.scrollTo(0, 0);
  };

	$routeProvider
		.when('/', {
			onEnter: scrollContent,
			templateUrl: 'app/views/home.html'
		})
		.otherwise('/');

}]);
