app.controller('productsController', ['$scope', function($scope){
	$scope.categories = [
		'Limpeza',
		'Automotivos',
		'Piscina',
		'Lixeiras'
	];

	$scope.items = [
		{
			name: 'nome1',
			category: 'Limpeza',
			brands: 'Marca 1, Marca 2'
		},
		{
			name: 'nome2',
			category: 'Limpeza',
			brands: 'Marca 3'
		},
		{
			name: 'nome3',
			category: 'Piscina',
			brands: 'Marca 5, Marca 6'
		},
		{
			name: 'nome4',
			category: 'Automotivos',
			brands: 'Marca 7'
		}
	];
}]);
