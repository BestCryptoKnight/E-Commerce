import { createStore } from 'react-redux';
import {
  addToCart,
  clearAlert,
  clearCart,
  decrease,
  increase,
  removeItem,
} from './actions/cartActions';
import { setSearchValue } from './actions/productsActions';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(setSearchValue(searchValue));
store.dispatch(addToCart(id, title, price, description, category, image, qty));
store.dispatch(increase(id));
store.dispatch(decrease(id));
store.dispatch(removeItem(id));
store.dispatch(clearCart());
store.dispatch(clearAlert());

// const counter = useSelector((state) => state.counter);
// const currentUser = useSelector((state) => state.currentUser);

// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(allActions.userActions.setUser(user))
//   }, [])

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

export default store(reducers);
