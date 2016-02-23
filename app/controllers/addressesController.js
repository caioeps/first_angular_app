app.controller('addressesController', ['$scope', function($scope){
	var ng = $scope
	ng.stores = [
		{
			name: 'Seis Bocas',
			address: 'Rua república da armênia',
			number: '117',
			phone: '(85) 3278-1297',
			position: [-3.7965304, -38.4929204],
			id: 'seis'
		},
		{
			name: 'Serrinha',
			address: 'R. Antônio Acioli',
			number: '31',
			phone: '(85) 3295-9827',
			position: [-3.7866203, -38.5510372],
			id: 'serrinha'
		},

		{
			name: 'Ceasa',
			address: 'Av. Dr. Mendel Steinbruch',
			number: '2244',
			phone: '(85) 3293-8221',
			position: [-3.8472775, -38.5863079],
			id: 'ceasa'
		}
	];

	ng.marker = ng.stores[0];

	ng.getPosition = function(marker) {
		ng.marker = marker;
	}
}]);
