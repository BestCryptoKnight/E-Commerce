import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// store.dispatch(setSearchValue(searchValue));
// store.dispatch(addToCart(id, title, price, description, category, image, qty));
// store.dispatch(increase(id));
// store.dispatch(decrease(id));
// store.dispatch(removeItem(id));
// store.dispatch(clearCart());
// store.dispatch(clearAlert());

// const counter = useSelector((state) => state.counter);
// const currentUser = useSelector((state) => state.currentUser);

// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(allActions.userActions.setUser(user))
//   }, [])

// https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd

// const mapStateToProps = state => ({
//     error: getProductsError(state),
//     products: getProducts(state),
//     pending: getProductsPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchProducts: fetchProductsAction
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductView );

export default store;
