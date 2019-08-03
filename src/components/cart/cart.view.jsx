import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const TwoColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Section = styled.section`
	margin: 20px auto;
	padding: 4px;
	background: MintCream;
	font-size: 1em;
	border: 4px solid LightCyan;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justifyContent: 'space-between';
	min-width: 200px;
	max-width: 300px;
	margin: 20px;
	padding 10px;

	form {
		display: flex;
  		label {
  			margin: 4px;
  			min-width: 100px;
  		}

	input {
		margin: 4px;
		display: flex;
		flex-grow: 1;
		min-width: 100px;
	}
	button {
		margin: 4px;
		min-width: 80px;
	}

}`;

const ProductPill = styled.div`
	background: FloralWhite;
	display: flex;
	flex-direction: column;
	border: 1px solid LightGray;
	border-radius: 15px;
	min-height: 100px;
	width: 80%;
	margin: 10px auto;
	padding: 15px;
	p {
		margin: auto;
		display: block;
	}
`;

export const CartView = ({ products, addProduct, orders, removeProduct, discounts }) => {
	const [orderList, setOrderList] = useState({});
	useEffect(() => setOrderList(orders));

	return(
		<TwoColumnContainer>
			<Section>
			<h3> Products:</h3>
				{products && products.data && products.data.map((product, index) => (
					<ProductPill key={`product-${index}`}>
						<p>{product.name}</p>
						<p>{product.formattedPrice}</p>
						<button className="addButton" onClick={addProduct(product)}>Add to cart</button>
					</ProductPill>
					))}
			</Section>
			<Section>
			<h3> Cart: </h3>
				{Object.keys(orders || {}).map((key) => ( orders[key].num > 0 &&
					<ProductPill key={`order-${key}`}>
						<p>{orders[key].name}</p>
						<p>{orders[key].formattedPrice}</p>
						<p>No: {orders[key].num}</p>
						<p>total: {orders[key].num * orders[key].price}</p>
						<button className="removeButton" onClick={removeProduct(orders[key])}>Remove from cart</button>
					</ProductPill>
					))}
				<h3>Total before discount: {Object.keys(orders).reduce((total, key) => total + orders[key].num * orders[key].price, 0)}</h3>
				<h3>Discount: {discounts(Object.keys(orders).reduce((total, key) => total + orders[key].num * orders[key].price, 0))}</h3>
				<h3>Payable amount:{
					Object.keys(orders).reduce((total, key) => total + orders[key].num * orders[key].price, 0) - discounts(Object.keys(orders).reduce((total, key) => total + orders[key].num * orders[key].price, 0))
				}</h3>
			</Section>
		</TwoColumnContainer>
	);
};


CartView.propTypes = {
	discounts: PropTypes.func,
	orders: PropTypes.object,
	addProduct: PropTypes.func,
	removeProduct: PropTypes.func,
	products: PropTypes.object,
};

CartView.defaultProps = {
	discounts: () => 0,
	orders: {},
	addProduct: () => {},
	removeProduct: () => {},
	products: {},
};

export default CartView;