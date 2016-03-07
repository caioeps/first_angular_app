function Product(name, category){
	this.name = name;
	this.category = category;
}

Product.getArrayOfProductsFromStringArray = function(stringArray, category) {
	var productsArray = new Array();

	for(let i = 0; i < stringArray.length; i++) {
		product = new Product(stringArray[i], category);
		productsArray = productsArray.concat(product);
	}

	return productsArray;
};

Product.getProdutosDeLimpeza = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Água sanitária',
			'Álcool gel e líquido',
			'Alvejantes sem cloro',
			'Amaciantes',
			'Cêras',
			'Desinfetantes',
			'Hipoclorito',
			'Lava louças líquido e em pó',
			'Limpadores multiuso',
			'MOPs',
			'Panos de chão, limpeza e multiuso',
			'Produtos para porcelanato',
			'Sabonetes líquidos',
			'Vassouras',
			'Aromatizantes',
			'Sabão em barra',
			'Desengordurantes',
			'Águas perfumadas spray',
			'Lustra móveis',
			'Limpa vidros',
			'Pedras sanitárias',
			'Passa roupas',
			'Rodos limpa vidros',
			'Refil para MOPS e rodos',
			'Rodos de plástico ou em alumínio',
			'Fibras',
			'Flanelas'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Limpeza');
};

Product.getProdutosPlasticos = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Bacias',
			'Baldes',
			'Baldes espremedores',
			'Carrinho funcional',
			'Dispenser para copo',
			'Lixeiras',
			'Porta copo',
			'Porta papel toalha',
			'saboneteiras',
			'spray pulverizadores',
			'espanadores'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Plásticos');
};

Product.getProdutosAutomotivos = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Aromatizantes',
			'Cêras',
			'Cêras com carnaúba',
			'Desengraxante',
			'Estopa',
			'Lava autos',
			'Limpa estofadores',
			'Limpa pneu',
			'Limpadores multiuso',
			'Panos microfibras',
			'Polidores',
			'Revitalizador para plásticos',
			'Solupan',
			'Lubrificantes',
			'Esponjas lava carros'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Automotivos');
};

Product.getProdutosDescartaveis = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Copos descartáveis',
			'filme PVC',
			'Guardanapos',
			'Papel alumínio',
			'Papel higiênico domiciliar',
			'Papel higiênico institucional',
			'Papel toalha interfolhado',
			'Sacos de lixo',
			'Palitos de dente em sachê',
			'Luvas de procedimento, vinil e látex',
			'Toucas',
			'Máscaras'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Descartáveis');
};

Product.getProdutosDePiscina = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Algicida de choque',
			'Algicida manutenção',
			'Barrilha',
			'Cabos telescópicos',
			'Carrinho aspirador com escova',
			'Carrinho aspirador com rodas',
			'Clarificantes',
			'Cloro em pó (baldes)',
			'Cloro em pó (kg)',
			'Degrau de plástico',
			'Elevador de pH',
			'Flutuadores',
			'Limpa bordas',
			'Mangueiras',
			'Peneiras',
			'Sulfato de alumínio',
			'Sulfato de cobre',
			'Tabletes de cloro',
			'Inibidor de manchas'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Piscina');
};

Product.getProdutosDiversos = function(stringArray){
	if(stringArray === undefined) {
		products = [
			'Colas',
			'Fitas adesivas',
			'Difusores para ambiente',
			'Natalina',
			'Evita mofo',
			'Esponjas',
			'Inseticidas',
			'Raticidas',
			'Espanador de pena',
			'Placas sinalizadoras',
			'Telas para pias',
			'Telas para ralos',
			'Cabos de alumínio',
			'Cabos de vassoura',
			'Tapetes',
			'Pilhas',
			'Shampoo para cães',
			'Desinfetante de ambiente para cães'
		].sort();
	} else {
		products = stringArray;
	}

	return Product.getArrayOfProductsFromStringArray(products, 'Diversos');
};



