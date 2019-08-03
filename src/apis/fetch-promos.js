const PROMOS = [
	{ id: 'RRD4D32', name: 'RRD4D32', details: '10% discount for orders above $1000 (pre-discount)' },
	{ id: '44F4T11', name: '44F4T11', details: '15% discount for orders above $1500 (pre-discount)' },
	{ id: 'FF9543D1', name: 'FF9543D1', details: 'Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased'},
	{ id: 'YYGWKJD', name:'YYGWKJD', details:'Reduces the form price to $89.99 a unit when at least 1 wf is purchased'}
];

export function fetchPromos() {
	return	Promise.resolve(PROMOS);
}