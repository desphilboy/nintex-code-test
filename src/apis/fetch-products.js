const PRODUCTS = [
	{ id: 'wf', name: 'Workflow', price: 199.99, formattedPrice: '$199.99' },
	{ id: 'docgen', name: 'Document Generation', price: 9.99, formattedPrice: '$9.99' },
	{ id: 'form', name: 'Form', price: 99.99, formattedPrice: '$99.99'},
];

export function fetchProducts() {
	return Promise.resolve(PRODUCTS);
} 

export default fetchProducts;