app.controller('productsController', ['$scope', function($scope){
	var ng = $scope;

	var produtosDeLimpeza    = Product.getProdutosDeLimpeza(),
			produtosPlasticos    = Product.getProdutosPlasticos(),
			produtosAutomotivos  = Product.getProdutosAutomotivos(),
			produtosDescartaveis = Product.getProdutosDescartaveis(),
			produtosDePiscina    = Product.getProdutosDePiscina(),
			produtosDiversos     = Product.getProdutosDiversos();

	ng.categories = [
		'Limpeza',
		'Plásticos',
		'Automotivos',
		'Descartáveis',
		'Piscina',
		'Diversos'
	];

	ng.items = new Array;
	ng.items = ng.items.concat(produtosDeLimpeza, produtosPlasticos, produtosAutomotivos,
														 produtosDescartaveis, produtosDePiscina, produtosDiversos);

}]);
