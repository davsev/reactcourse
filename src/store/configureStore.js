import { createStore, combineReducers } from 'redux';
import expenceReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenceReducer,
            filters: filtersReducer
        })
    );

    return store;
};

