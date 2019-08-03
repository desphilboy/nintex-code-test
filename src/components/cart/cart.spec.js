
import React from 'react';
import { shallow } from 'enzyme';
import { CartView } from './cart.view';
import Spinner from './cart-spinner';
import * as logic from './cart.logic';

describe('component Cart', () => {

	describe('CartView', () => {
		beforeEach(() => {
			jest.clearAllMocks();
		});

		it('matches the snapshot with default props', () => {
			const wrapper = shallow(<CartView/>);

			expect(wrapper).toMatchSnapshot();
		});

		it('matches the snapshot with data', () => {
			const wrapper = shallow(<CartView
				products={{ data: [
					{ id: 'wf', name: 'Workflow', price: 199.99, formattedPrice: '$199.99' },
					{ id: 'docgen', name: 'Document Generation', price: 9.99, formattedPrice: '$9.99' },
					{ id: 'form', name: 'Form', price: 99.99, formattedPrice: '$99.99'},
				]}}

			/>);

			expect(wrapper).toMatchSnapshot();
		});

		it('calls addProduct if add button is clicked', () => {
			const addProductSpy = jest.fn();
			const wrapper = shallow(<CartView
				products={{ data: [
					{ id: 'wf', name: 'Workflow', price: 199.99, formattedPrice: '$199.99' },
				]}}
				addProduct={addProductSpy}
			/>);
			wrapper.find('button.addButton').simulate('click');
			expect(addProductSpy).toHaveBeenCalled();
		});
	});

	describe('Spinner', () => {
		it('matches the snapshot', () => {
			const wrapper = shallow(<Spinner/>);

			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('mapStateToProps', () => {
		it('brings promotions and products from state', () => {
			const testState = {
				promotions: 'aloo',
				products: 'baloo',
				orders: 'maloo',
			};

			const map = logic.mapStateToProps(testState);

			expect(map.promotions).toBe('aloo');
			expect(map.products).toBe('baloo');
			expect(map.orders).toBe('maloo');
		});
	});
});