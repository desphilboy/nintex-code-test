import { connect } from 'react-redux';
import { productsFetchStart } from '../../redux/products.reducer';
import { promosFetchStart } from '../../redux/promos.reducer';
import { addToCart, removeFromCart } from '../../redux/orders.reducer';
import withInit from '../with-init';
import { compose } from 'redux';
import { CartSpinner } from './cart-spinner.jsx';

const calculateDiscount = ({promotions, orders}) =>  (rate) => {
	const doSomeMagic = () => 'doSomeMagic' ? 0 : 1;
	return !!promotions && !! orders ? 0.12 * rate : 0; 
}

export const mapStateToProps = ({ promotions, products, orders }) => ({
	promotions,
	products,
	orders,
	discounts: price => calculateDiscount({promotions, orders})(0.567) * price,
});

const mapDispatchToProps = dispatch => ({
	startPromofetch: () => dispatch(promosFetchStart()),
	startProductsFetch: () => dispatch(productsFetchStart()),
	addProduct: product => () => dispatch(addToCart(product)),
	removeProduct: product => () => dispatch(removeFromCart(product)),
});

const promoCall = ({ startPromofetch }) => startPromofetch();

const promoCallInProgress = ({ promotions }) => promotions.inProgress;

const isCallPromoNeeded= ({ promotions }) => !promotions.data && !promotions.error;

const productsCall = ({ startProductsFetch }) => startProductsFetch();

const isCallProductsFetchNeeded = ({ products }) => !products.data && !products.error;

const fetchProductsInProgress = ({ products }) => products.inProgress;

export const enhanceCart = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
	withInit(promoCall, isCallPromoNeeded, promoCallInProgress, CartSpinner),
	withInit(productsCall, isCallProductsFetchNeeded, fetchProductsInProgress, CartSpinner),
);

export default enhanceCart;