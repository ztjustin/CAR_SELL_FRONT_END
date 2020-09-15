import  { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import currentItem from './reducers/currentItem';
import featureds from './reducers/featureds';
import categories from './reducers/categories';
import brands from './reducers/brands';
import products from './reducers/products';
import auth from './reducers/auth';
import alert from './reducers/alert';
import equipments from './reducers/equipments';


const reducer = combineReducers({
    featureds,
    products,
    currentItem,
    categories,
    brands,
    auth,
    alert,
    equipments,
});


const store = createStore(reducer, applyMiddleware(thunk,logger));


export default store;

