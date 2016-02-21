app.controller('productsController', ['$scope', function($scope){
	$scope.categories = [
		'lpz',
		'pool'
	];

	$scope.items = [
		{
			name: 'nome1',
			category: 'lpz'
		},
		{
			name: 'nome2',
			category: 'lpz'
		},
		{
			name: 'nome3',
			category: 'pool'
		}
	];
}]);
